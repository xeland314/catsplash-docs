import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const body = `# Catsplash Docs
> Lightweight captive portal for Linux. Go, SQLite, iptables.

## Getting Started
- [Introduction](/guides/introduccion/) - What is Catsplash and how it works
- [Installation](/guides/instalacion/) - Requirements, build, cross-compilation
- [Configuration](/guides/configuracion/) - setup.sh wizard, TOML, systemd

## Usage
- [Usage Guide](/guides/uso/) - Starting Catsplash, catsctl commands
- [catsctl CLI Reference](/reference/catsctl/) - All CLI commands

## Architecture
- [Architecture](/guides/arquitectura/) - Components and authentication flow
- [Advanced Network Setup](/guides/red/) - hostapd, dnsmasq manual config
- [WiFi Security](/guides/seguridad-wifi/) - WPA2-PSK setup

## Performance
- [Performance](/guides/rendimiento/) - Stress test results, benchmarks
- [Network Troubleshooting](/guides/problemas-red/) - Common issues and fixes

## Reference
- [TOML Configuration](/reference/configuracion/) - All config fields
- [catsctl CLI](/reference/catsctl/) - Command reference

## English Pages
- [Introduction](/en/guides/introduccion/)
- [Installation](/en/guides/instalacion/)
- [Configuration](/en/guides/configuracion/)
- [Usage](/en/guides/uso/)
- [Architecture](/en/guides/arquitectura/)
- [Performance](/en/guides/rendimiento/)
- [Advanced Network Setup](/en/guides/red/)
- [WiFi Security](/en/guides/seguridad-wifi/)
- [Troubleshooting](/en/guides/problemas-red/)
- [catsctl CLI](/en/reference/catsctl/)
- [TOML Configuration](/en/reference/configuracion/)
`;
  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
