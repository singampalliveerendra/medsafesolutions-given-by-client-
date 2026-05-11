export function MedsafeLogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 72 72" aria-hidden="true" className={className}>
      <defs>
        <linearGradient id="medsafe-shield" x1="8" x2="64" y1="8" y2="64" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0f427e" />
          <stop offset="1" stopColor="#15c2d8" />
        </linearGradient>
        <linearGradient id="medsafe-swoosh" x1="8" x2="64" y1="58" y2="58" gradientUnits="userSpaceOnUse">
          <stop stopColor="#f4b400" />
          <stop offset="1" stopColor="#15c2d8" />
        </linearGradient>
      </defs>
      <path d="M36 5 59 14v18c0 14.4-8.6 27-23 34-14.4-7-23-19.6-23-34V14L36 5Z" fill="url(#medsafe-shield)" />
      <path
        d="M36 11.5 54 18.6v13.7c0 11.5-6.5 21.6-18 27.8-11.5-6.2-18-16.3-18-27.8V18.6L36 11.5Z"
        fill="none"
        stroke="#ffffff"
        strokeWidth="2.8"
      />
      <path d="M31 16h10v6h6v10h-6v6H31v-6h-6V22h6z" fill="#ffffff" />
      <path
        d="M19 38c8-6 17-3.5 24-1.3 5.7 1.8 11.1 3.6 17-1.1v10.6c-6.2 3.2-12 2-17.7.7-7.4-1.7-14.6-3.3-23.3 2.7Z"
        fill="#ffffff"
        opacity="0.95"
      />
      <path d="M24 47h4v8h-4zm8-4h4v12h-4zm8-5h4v17h-4zm8-8h4v25h-4z" fill="#0f427e" opacity="0.92" />
      <path
        d="M23 44c6 0 9-5 13-5 4.3 0 7 3 10 3 4.1 0 6.5-4 11-4"
        fill="none"
        stroke="#15c2d8"
        strokeLinecap="round"
        strokeWidth="2"
      />
      <path d="M12 57c11 6 38 6 49-1" fill="none" stroke="url(#medsafe-swoosh)" strokeLinecap="round" strokeWidth="4" />
    </svg>
  );
}
