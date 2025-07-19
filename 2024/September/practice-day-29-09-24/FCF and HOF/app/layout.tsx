// app/layout.tsx

import './globals.css';
import React from 'react';

export const metadata = {
  title: 'מצגת מתודות מערכים ב-JavaScript',
  description: 'שיעור על מתודות מערכים ב-JavaScript',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
