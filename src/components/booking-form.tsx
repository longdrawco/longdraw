"use client";

import { useState, Suspense } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const FORM_ENDPOINT = "https://api.web3forms.com/submit";

// Shared base style for all form fields
const FIELD = "bg-white border-[#d9c7a6]";

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
] as const;

const TIME_OPTIONS = [
  { value: "morning", label: "Morning" },
  { value: "afternoon", label: "Afternoon" },
  { value: "flexible", label: "Flexible" },
];

export type ServiceOption =
  | "pressure-washing"
  | "window-washing"
  | "garage-floor-epoxy";

interface BookingFormProps {
  defaultService?: ServiceOption;
}

function stripPhone(value: string): string {
  return value.replace(/\D/g, "");
}

function FieldLabel({
  htmlFor,
  required,
  children,
}: {
  htmlFor: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <Label htmlFor={htmlFor} className="font-sans text-body-sm text-charcoal">
      {children}
      {required && (
        <span className="text-oxide font-bold ml-1" aria-hidden>
          *
        </span>
      )}
    </Label>
  );
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p className="font-sans text-body-sm text-oxide mt-1" role="alert">
      {message}
    </p>
  );
}

function BookingFormInner({ defaultService }: BookingFormProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [service, setService] = useState<string>(defaultService ?? "");
  const [timeWindow, setTimeWindow] = useState<string>("");
  const [firstAvailable, setFirstAvailable] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string>("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  function clearFieldError(field: string) {
    if (fieldErrors[field]) {
      setFieldErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot — silently succeed if a bot filled the hidden field
    const honeypot = (data.get("botcheck") as string) ?? "";
    if (honeypot) {
      router.push("/booking-confirmation");
      return;
    }

    // Trim text fields
    for (const key of ["name", "email", "street", "city", "zip", "notes"]) {
      const val = data.get(key);
      if (typeof val === "string") data.set(key, val.trim());
    }

    const newFieldErrors: Record<string, string> = {};

    // Strip and validate phone
    const phone = stripPhone((data.get("phone") as string) ?? "");
    if (phone.length < 10) {
      newFieldErrors.phone = "Please enter a valid 10-digit phone number.";
    } else {
      data.set("phone", phone);
    }

    // Validate ZIP
    const zip = ((data.get("zip") as string) ?? "").trim();
    if (!/^\d{5}$/.test(zip)) {
      newFieldErrors.zip = "Please enter a valid 5-digit ZIP code.";
    }

    setFieldErrors(newFieldErrors);

    if (Object.keys(newFieldErrors).length > 0) {
      setError("Please fix the highlighted fields before submitting.");
      return;
    }

    // Controlled field values
    data.set("service", service);
    data.set("time_window", timeWindow || "flexible");
    if (firstAvailable) data.set("preferred_date", "first-available");

    // Hidden metadata
    data.set("source_page", pathname);
    data.set("submitted_at", new Date().toISOString());
    for (const key of UTM_KEYS) {
      const val = searchParams.get(key);
      if (val) data.set(key, val);
    }

    setSubmitting(true);

    // Convert FormData to plain object for JSON POST
    const payload: Record<string, string> = {};
    for (const [key, value] of data.entries()) {
      if (typeof value === "string") payload[key] = value;
    }

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (json.success) {
        router.push("/booking-confirmation");
      } else {
        setError("Something went wrong. Please call (214) 444-3042 or try again.");
      }
    } catch {
      setError("Something went wrong. Please call (214) 444-3042 or try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
      {/* Web3Forms config */}
      <input type="hidden" name="access_key" value="3c1cbe90-bc2b-418d-ac7c-8c402af00296" />
      <input type="hidden" name="subject" value="New quote request from longdraw.co" />
      <input type="hidden" name="from_name" value="Long Draw Website" />

      {/* Honeypot — hidden from users, filled by bots */}
      <input
        type="text"
        name="botcheck"
        tabIndex={-1}
        aria-hidden="true"
        defaultValue=""
        style={{ position: "absolute", left: "-5000px" }}
      />

      {/* Service (optional) */}
      <div className="flex flex-col gap-1.5">
        <FieldLabel htmlFor="service-trigger">Service</FieldLabel>
        <Select name="service" value={service} onValueChange={(val) => setService(val ?? "")}>
          <SelectTrigger
            id="service-trigger"
            className={cn(FIELD, "w-full rounded-sm")}
          >
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="pressure-washing">Pressure Washing</SelectItem>
            <SelectItem value="window-washing">Window Washing</SelectItem>
            <SelectItem value="garage-floor-epoxy">Garage Floor Epoxy</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Name + Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <FieldLabel htmlFor="name" required>Name</FieldLabel>
          <Input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={cn(FIELD, "rounded-sm h-11")}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <FieldLabel htmlFor="phone" required>Phone</FieldLabel>
          <Input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="(214) 555-0100"
            onChange={() => clearFieldError("phone")}
            className={cn(FIELD, "rounded-sm h-11", fieldErrors.phone && "border-oxide")}
          />
          <FieldError message={fieldErrors.phone} />
        </div>
      </div>

      {/* Email */}
      <div className="flex flex-col gap-1.5">
        <FieldLabel htmlFor="email">Email</FieldLabel>
        <Input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          className={cn(FIELD, "rounded-sm h-11")}
        />
      </div>

      {/* Street address */}
      <div className="flex flex-col gap-1.5">
        <FieldLabel htmlFor="street" required>Street address</FieldLabel>
        <Input
          id="street"
          name="street"
          type="text"
          required
          autoComplete="street-address"
          className={cn(FIELD, "rounded-sm h-11")}
        />
      </div>

      {/* City + ZIP */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        <div className="col-span-1 sm:col-span-2 flex flex-col gap-1.5">
          <FieldLabel htmlFor="city" required>City</FieldLabel>
          <Input
            id="city"
            name="city"
            type="text"
            required
            autoComplete="address-level2"
            className={cn(FIELD, "rounded-sm h-11")}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <FieldLabel htmlFor="zip" required>ZIP</FieldLabel>
          <Input
            id="zip"
            name="zip"
            type="text"
            required
            inputMode="numeric"
            maxLength={5}
            pattern="\d{5}"
            autoComplete="postal-code"
            onChange={() => clearFieldError("zip")}
            className={cn(FIELD, "rounded-sm h-11", fieldErrors.zip && "border-oxide")}
          />
          <FieldError message={fieldErrors.zip} />
        </div>
      </div>

      {/* Preferred date */}
      <div className="flex flex-col gap-2">
        <FieldLabel htmlFor="preferred_date">Preferred date</FieldLabel>
        <Input
          id="preferred_date"
          name="preferred_date"
          type="date"
          disabled={firstAvailable}
          className={cn(FIELD, "rounded-sm h-11", firstAvailable && "opacity-40")}
        />
        <label className="flex items-center gap-3 cursor-pointer font-sans text-body-sm text-saddle select-none">
          <input
            type="checkbox"
            checked={firstAvailable}
            onChange={(e) => setFirstAvailable(e.target.checked)}
          />
          First available — any date works for me
        </label>
      </div>

      {/* Time window */}
      <div className="flex flex-col gap-2">
        <Label className="font-sans text-body-sm text-charcoal">Preferred time</Label>
        <RadioGroup
          value={timeWindow}
          onValueChange={setTimeWindow}
          className="flex flex-row gap-6"
        >
          {TIME_OPTIONS.map(({ value, label }) => (
            <label
              key={value}
              className="flex items-center gap-3 cursor-pointer font-sans text-body-sm text-charcoal select-none"
            >
              <RadioGroupItem value={value} />
              {label}
            </label>
          ))}
        </RadioGroup>
      </div>

      {/* Notes */}
      <div className="flex flex-col gap-1.5">
        <FieldLabel htmlFor="notes">Notes</FieldLabel>
        <Textarea
          id="notes"
          name="notes"
          rows={4}
          placeholder="Gate codes, pets, specific areas, or anything else we should know."
          className={cn(FIELD, "rounded-sm resize-y field-sizing-fixed")}
        />
      </div>

      {/* Summary error — kept for accessibility/screen readers */}
      {error && (
        <p className="font-sans text-body-sm text-oxide" role="alert">
          {error}
        </p>
      )}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={submitting}
        className="self-start"
      >
        {submitting ? "Sending…" : "Request quote"}
      </Button>

      <p className="font-sans text-body-sm text-saddle">
        We&apos;ll text within one business hour to confirm.
      </p>
    </form>
  );
}

export function BookingForm(props: BookingFormProps) {
  return (
    <Suspense>
      <BookingFormInner {...props} />
    </Suspense>
  );
}
