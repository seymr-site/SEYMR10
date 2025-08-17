export function buildCSP() {
  const self = "'self'";
  const unsafeInline = "'unsafe-inline'";
  const data = "data:";
  const https = "https:";
  const ga = "https://www.googletagmanager.com https://www.google-analytics.com";
  return [
    "default-src " + [self, https].join(' '),
    "script-src " + [self, ga, unsafeInline].join(' '),
    "style-src " + [self, unsafeInline].join(' '),
    "img-src " + [self, data, https].join(' '),
    "connect-src " + [self, https].join(' '),
    "font-src " + [self, data, https].join(' '),
    "frame-src " + [self, https].join(' ')
  ].join('; ');
}
