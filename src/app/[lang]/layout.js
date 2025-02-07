export async function generateStaticParams() {
  return [{ lang: "en-US" }, { lang: "pt" }];
}

export default function Root({ children, params }) {
  return (
    <html lang={params.lang}>
      <body>{children}</body>
    </html>
  );
}
