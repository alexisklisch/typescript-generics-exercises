// 1) re-implementa Partial<T> y Required<T>
type MyPartial<T> = /* … */;
type MyRequired<T> = /* … */;

// 2) declara la función mergeConfig
function mergeConfig<T>(defaults: T, override: MyPartial<T>): MyRequired<T> {
  return { ...defaults, ...override } as any;
}

// 3) prueba:
interface AppConfig {
  url: string;
  timeout: number;
  debug: boolean;
}

const defaults: AppConfig = { url: "–", timeout: 1000, debug: false };
const custom = mergeConfig(defaults, { debug: true });
// custom debe tener url, timeout y debug con tipos correctos

/* Solución:

type MyPartial<T> = { [P in keyof T]?: T[P] };
type MyRequired<T> = { [P in keyof T]-?: T[P] };

  – `?` hace opcional; `-?` remueve el opcional.  
  – `mergeConfig` retorna la combinación, y el `as any` se salva porque TS no infiere automáticamente Required.

*/
