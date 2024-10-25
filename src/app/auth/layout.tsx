export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-screen justify-center items-center md:px-0 px-4">
      {children}
    </main>
  );
}
