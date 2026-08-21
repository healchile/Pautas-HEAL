# HEAL Bitácora de Entrenamiento

Bitácora de sesiones de entrenamiento por paciente, para uso individual de cada kinesiólogo de HEAL. Funciona 100% offline en el navegador (los datos se guardan solo en el dispositivo donde se usa, no hay servidor ni base de datos compartida).

## Qué incluye esta carpeta

- `index.html` — la aplicación completa (UI + lógica). Es el único archivo necesario para funcionar.
- `manifest.json` — permite instalar la app en la pantalla de inicio del celular (PWA).
- `sw.js` — service worker, permite que funcione sin conexión una vez cargada.
- `icons/` — íconos de la app para la instalación.

## Cómo publicarla (igual que Alta Activa / la pauta de alta)

1. Sube esta carpeta completa a un repositorio de GitHub (por ejemplo, dentro de `healchile.github.io`, en una subcarpeta como `/Bitacora-HEAL/`).
2. Activa GitHub Pages para ese repositorio si no lo está ya.
3. La app quedará disponible en una URL del tipo `healchile.github.io/Bitacora-HEAL/`.
4. Cada kinesiólogo abre esa URL desde su celular o computador y, si quiere, la instala:
   - **iPhone (Safari):** botón compartir → "Añadir a pantalla de inicio".
   - **Android (Chrome):** menú (⋮) → "Instalar aplicación" (o aparecerá un aviso automático).
   - **Computador (Chrome/Edge):** ícono de instalación en la barra de direcciones, o menú → "Instalar HEAL Bitácora".

También puedes abrir `index.html` directamente con doble clic para probarla de inmediato — funciona igual, solo que sin instalación como app ni funcionamiento offline garantizado (eso requiere que esté servida por HTTPS, como en GitHub Pages).

## Cómo se usan los datos

- Cada persona que usa la app en su propio dispositivo tiene su propia lista de pacientes y sesiones — **no se comparte entre kinesiólogos ni entre dispositivos**.
- Como todo vive en el navegador, si se borra el caché o se cambia de computador se pierde la información. Por eso existe la opción **Exportar datos** (menú ⋯ en la pantalla principal): descarga un archivo de respaldo en cualquier momento.
- Para restaurar un respaldo (o traspasarlo a otro dispositivo), usa **Importar / restaurar datos** desde el mismo menú y selecciona el archivo exportado. Esto reemplaza todos los datos actuales del dispositivo.
- Recomendación: exportar el respaldo periódicamente (por ejemplo, una vez por semana).

## Cómo se usa en el día a día

1. Buscar o crear al paciente (nombre + inicial de apellido).
2. Entrar a su ficha → pestaña **Hoy** → "Agregar ejercicio".
3. Elegir categoría → elegir ejercicio (o escribir uno nuevo si no está en la lista) → cargar series, con repeticiones y peso (peso opcional) por cada serie.
4. El ejercicio queda guardado al instante; se pueden seguir agregando más durante la sesión.
5. Notas generales de la sesión: campo de observaciones al final de la pestaña Hoy.
6. Pestaña **Historial**: revisar sesiones anteriores, editar o eliminar.
7. Pestaña **Progreso**: elegir un ejercicio y ver su evolución de carga en el tiempo.

## Categorías de ejercicio

Tren superior — Empuje (TSE) · Tracción (TST) · Complementario (TSC)
Tren inferior — Cadena anterior (TIA) · Cadena posterior (TIP) · Complementario (TIC)
CORE (COR)

La biblioteca de ejercicios parte con una lista base por categoría y cada kinesiólogo puede agregar los que necesite; quedan guardados para la próxima vez.
