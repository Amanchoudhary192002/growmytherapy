import './globals.css'

export const metadata = {
  title: "Dr. Serena Blake | Clinical Psychologist",
  description: "Therapist website for Dr. Serena Blake, PsyD in Los Angeles, CA",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans">{children}



      </body>

    </html>
  );
}