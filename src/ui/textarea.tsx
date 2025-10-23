
import { ChangeEvent } from 'react';

interface TextareaProps {
  placeholder?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  rows?: number;
  className?: string;
}

export function Textarea({ 
  placeholder, 
  value, 
  onChange, 
  rows = 3,
  className = '' 
}: TextareaProps) {
  const baseClasses = 'flex min-h-[80px] w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50';

  return (
    <textarea
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      rows={rows}
      className={`${baseClasses} ${className}`}
    />
  );
}

