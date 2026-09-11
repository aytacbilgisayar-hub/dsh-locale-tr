/**
 * dsh-locale-tr — Node/Host half.
 *
 * This plugin has nothing to register on the Host side. Its only job here is to
 * exist as a loadable Cordis plugin (named by an `insert:` entry in the web
 * profile's cordis.patch.yml) so that @deepseek-ai/dsh-client-modules notices
 * this package's `dsh.client` declaration and serves lib/client.js to the
 * browser. All Turkish-language work happens in the browser half (lib/client.js,
 * generated from src/translations.json).
 */
export function apply(ctx) {
  // intentionally empty — nothing needed on the Host/Node side.
}
