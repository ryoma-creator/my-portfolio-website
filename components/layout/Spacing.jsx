'use client'

export default function Spacing({ height = "30vh" }) {
  return (
    <div className="w-full" style={{ height }} aria-hidden="true" />
  );
}