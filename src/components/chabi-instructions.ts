import { html, LitElement } from 'lit';

export class ChabiInstructions extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <section id="instrucciones" class="space-y-12 py-12">
        <!-- Headers -->
        <div class="mx-auto max-w-4xl text-center">
          <p class="text-sm font-semibold uppercase tracking-[0.3em] text-secondary">Guía técnica completa</p>
          <h2 class="mt-4 text-4xl font-extrabold text-primary">Instalación y Configuración de Chabito</h2>
          <p class="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            Chabito es un bot de WhatsApp construido con Node.js, Baileys, una API HTTP con Express y un servidor WebSocket de agente basado en ws.
          </p>
        </div>

        <!-- Requisitos -->
        <div class="rounded-2xl border border-slate-200 bg-white p-8">
          <h3 class="text-2xl font-bold text-primary">Requisitos</h3>
          <ul class="mt-6 space-y-3 text-slate-700">
            <li class="flex items-start gap-3">
              <span class="font-semibold text-secondary">✓</span>
              <span>Node.js 18 o superior</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="font-semibold text-secondary">✓</span>
              <span><strong>npm, yarn o bun</strong> (se recomienda <strong>bun</strong> para mejor rendimiento)</span>
            </li>
          </ul>
        </div>

        <!-- Instalación -->
        <div class="rounded-2xl border border-slate-200 bg-white p-8">
          <h3 class="text-2xl font-bold text-primary">Instalación</h3>
          
          <!-- npm -->
          <div class="mt-6">
            <h4 class="text-lg font-semibold text-slate-900">npm</h4>
            <pre class="mt-3 overflow-x-auto rounded-xl bg-slate-950 p-4 text-sm text-white"><code>npm install</code></pre>
          </div>

          <!-- Yarn -->
          <div class="mt-6">
            <h4 class="text-lg font-semibold text-slate-900">Yarn</h4>
            <pre class="mt-3 overflow-x-auto rounded-xl bg-slate-950 p-4 text-sm text-white"><code>yarn install</code></pre>
          </div>

          <!-- Bun (recomendado) -->
          <div class="mt-6">
            <h4 class="text-lg font-semibold text-slate-900">🚀 Bun (Recomendado)</h4>
            <p class="mt-2 text-sm text-slate-600">Primero instala Bun si aún no lo tienes:</p>
            <pre class="mt-3 overflow-x-auto rounded-xl bg-slate-950 p-4 text-sm text-white"><code>curl -fsSL https://bun.sh/install | bash</code></pre>
            <p class="mt-3 text-sm text-slate-600">Luego instala las dependencias:</p>
            <pre class="mt-3 overflow-x-auto rounded-xl bg-slate-950 p-4 text-sm text-white"><code>bun install</code></pre>
          </div>
        </div>

        <!-- Scripts disponibles -->
        <div class="rounded-2xl border border-slate-200 bg-white p-8">
          <h3 class="text-2xl font-bold text-primary">Scripts Disponibles</h3>
          
          <div class="mt-6 grid gap-6 md:grid-cols-2">
            <div>
              <h4 class="font-semibold text-slate-900">npm / Yarn</h4>
              <ul class="mt-4 space-y-2 text-sm text-slate-700">
                <li><code class="rounded bg-slate-100 px-2 py-1">npm run start</code> - Ejecuta en desarrollo con tsx</li>
                <li><code class="rounded bg-slate-100 px-2 py-1">npm run build</code> - Compila TypeScript a dist/</li>
              </ul>
            </div>
            <div>
              <h4 class="font-semibold text-slate-900">Bun</h4>
              <ul class="mt-4 space-y-2 text-sm text-slate-700">
                <li><code class="rounded bg-slate-100 px-2 py-1">bun run start:bun</code> - Ejecuta con Bun</li>
                <li><code class="rounded bg-slate-100 px-2 py-1">bun run build:bun</code> - Genera bundle para Bun</li>
              </ul>
            </div>
          </div>

          <p class="mt-6 text-sm text-slate-600">
            <strong>Nota:</strong> Todo el output compilado se escribe en la carpeta <code class="rounded bg-slate-100 px-2 py-1">dist/</code>. Los archivos <code class="rounded bg-slate-100 px-2 py-1">.map</code> no se generan dentro de los fuentes.
          </p>
        </div>

        <!-- Ejecución -->
        <div class="rounded-2xl border border-slate-200 bg-white p-8">
          <h3 class="text-2xl font-bold text-primary">Ejecución</h3>
          
          <div class="mt-6 space-y-4">
            <div>
              <h4 class="font-semibold text-slate-900">Con npm</h4>
              <pre class="mt-2 overflow-x-auto rounded-xl bg-slate-950 p-4 text-sm text-white"><code>npm run start</code></pre>
            </div>
            <div>
              <h4 class="font-semibold text-slate-900">Con Yarn</h4>
              <pre class="mt-2 overflow-x-auto rounded-xl bg-slate-950 p-4 text-sm text-white"><code>yarn start</code></pre>
            </div>
            <div>
              <h4 class="font-semibold text-slate-900">Con Bun</h4>
              <pre class="mt-2 overflow-x-auto rounded-xl bg-slate-950 p-4 text-sm text-white"><code>bun run start:bun</code></pre>
            </div>
          </div>

          <div class="mt-6 rounded-lg bg-box-bg p-4">
            <p class="text-sm font-semibold text-slate-900">Puerto alternativo (si 8081 está ocupado):</p>
            <pre class="mt-3 overflow-x-auto rounded-lg bg-slate-950 p-3 text-xs text-white"><code>AGENT_WS_PORT=8082 AGENT_WS_URL=ws://127.0.0.1:8082 bun run start:bun</code></pre>
          </div>

          <div class="mt-6 space-y-2 text-sm text-slate-700">
            <p><strong>Servicios que se levantan:</strong></p>
            <ul class="mt-3 space-y-1 ml-4">
              <li>• API HTTP de Express: <code class="rounded bg-slate-100 px-2 py-1">http://localhost:3000</code> (puerto por defecto)</li>
              <li>• Servidor WebSocket: <code class="rounded bg-slate-100 px-2 py-1">ws://127.0.0.1:8081</code> (puerto por defecto)</li>
            </ul>
          </div>
        </div>

        <!-- Variables de entorno -->
        <div class="rounded-2xl border border-slate-200 bg-white p-8">
          <h3 class="text-2xl font-bold text-primary">Variables de Entorno Soportadas</h3>
          <div class="mt-6 grid gap-4 text-sm text-slate-700">
            <div><code class="rounded bg-slate-100 px-2 py-1">PORT</code> - Puerto de la API HTTP</div>
            <div><code class="rounded bg-slate-100 px-2 py-1">AGENT_WS_HOST</code> - Host del servidor WebSocket</div>
            <div><code class="rounded bg-slate-100 px-2 py-1">AGENT_WS_PORT</code> - Puerto del servidor WebSocket</div>
            <div><code class="rounded bg-slate-100 px-2 py-1">AGENT_WS_URL</code> - URL WebSocket para enviar ChatMessageDto</div>
          </div>
        </div>

        <!-- Configuración de IA -->
        <div class="rounded-2xl border border-slate-200 bg-white p-8">
          <h3 class="text-2xl font-bold text-primary">Configuración de Inteligencia Artificial (LLM)</h3>
          <p class="mt-4 text-slate-700">
            Crea un archivo <code class="rounded bg-slate-100 px-2 py-1">.env</code> en la raíz del proyecto con la configuración de tu proveedor de IA:
          </p>
          <pre class="mt-4 overflow-x-auto rounded-xl bg-slate-950 p-4 text-xs text-white"><code># Proveedor de IA (xai, openai, anthropic, google, groq)
PI_PROVIDER=xai
PI_MODEL=grok-beta
XAI_API_KEY=tu_clave_api_aqui

# Prompt del sistema del bot
AGENT_SYSTEM_PROMPT=Eres Chabito. Responde de forma útil, breve y amable por WhatsApp.</code></pre>
          <p class="mt-4 text-xs text-slate-600">
            <strong>Nota:</strong> La variable de API Key cambia según el proveedor (OPENAI_API_KEY, ANTHROPIC_API_KEY, GEMINI_API_KEY, GROQ_API_KEY, etc.).
          </p>
        </div>

        <!-- Flujo de WhatsApp -->
        <div class="rounded-2xl border border-slate-200 bg-white p-8">
          <h3 class="text-2xl font-bold text-primary">Flujo de WhatsApp: Creación de tu Chatbot desde la UI</h3>
          <p class="mt-4 text-slate-700">La forma más fácil de crear y emparejar tu chatbot es utilizando la interfaz gráfica provista.</p>
          
          <ol class="mt-6 space-y-4 text-sm text-slate-700">
            <li class="flex gap-4">
              <span class="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-white font-bold flex-shrink-0">1</span>
              <div>
                <strong>Ejecuta el servidor principal:</strong>
                <pre class="mt-2 overflow-x-auto rounded-lg bg-slate-950 p-2 text-xs text-white"><code>bun run start:bun</code></pre>
              </div>
            </li>
            <li class="flex gap-4">
              <span class="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-white font-bold flex-shrink-0">2</span>
              <div>
                <strong>Abre tu navegador:</strong> <code class="rounded bg-slate-100 px-2 py-1">http://localhost:3000</code>
              </div>
            </li>
            <li class="flex gap-4">
              <span class="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-white font-bold flex-shrink-0">3</span>
              <div>
                <strong>Dirígete a Administrar Chatbots:</strong> <code class="rounded bg-slate-100 px-2 py-1">http://localhost:3000/#/chatbots</code>
              </div>
            </li>
            <li class="flex gap-4">
              <span class="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-white font-bold flex-shrink-0">4</span>
              <div>
                <strong>Crear Chatbot:</strong> Ingresa un nombre único para tu bot (ej: ventas-bot) y haz clic en "Crear".
              </div>
            </li>
            <li class="flex gap-4">
              <span class="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-white font-bold flex-shrink-0">5</span>
              <div>
                <strong>Escanear QR:</strong> Abre WhatsApp en tu teléfono, ve a "Dispositivos vinculados" y escanea el QR mostrado en pantalla.
              </div>
            </li>
            <li class="flex gap-4">
              <span class="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-white font-bold flex-shrink-0">6</span>
              <div>
                <strong>¡Listo!</strong> Tu Chabito estará funcionando y respondiendo con IA automáticamente.
              </div>
            </li>
          </ol>

          <div class="mt-6 rounded-lg bg-tertiary/10 p-4 text-sm text-slate-700">
            <strong>💾 Restauración automática:</strong> Las sesiones escaneadas se guardan en <code class="rounded bg-slate-100 px-1">auth_info_baileys/</code>. Al reiniciar el servidor, tus chatbots se reconectarán automáticamente sin necesidad de volver a escanear el QR.
          </div>
        </div>

        <!-- Endpoints HTTP -->
        <div class="rounded-2xl border border-slate-200 bg-white p-8">
          <h3 class="text-2xl font-bold text-primary">Endpoints HTTP (API)</h3>
          <p class="mt-4 text-slate-700">Para integración con otras aplicaciones:</p>
          
          <div class="mt-6 space-y-4">
            <div class="rounded-lg bg-slate-50 p-4">
              <code class="font-mono text-sm font-bold text-secondary">POST /api/sessions/:uuid</code>
              <p class="mt-2 text-sm text-slate-700">Crea una nueva sesión y genera la conexión con Baileys.</p>
            </div>
            <div class="rounded-lg bg-slate-50 p-4">
              <code class="font-mono text-sm font-bold text-secondary">GET /api/sessions</code>
              <p class="mt-2 text-sm text-slate-700">Devuelve lista con todas las sesiones activas y su estado.</p>
            </div>
            <div class="rounded-lg bg-slate-50 p-4">
              <code class="font-mono text-sm font-bold text-secondary">GET /api/sessions/:uuid/qr/png</code>
              <p class="mt-2 text-sm text-slate-700">Devuelve el QR en imagen PNG.</p>
            </div>
            <div class="rounded-lg bg-slate-50 p-4">
              <code class="font-mono text-sm font-bold text-secondary">GET /api/sessions/:uuid/status</code>
              <p class="mt-2 text-sm text-slate-700">Devuelve el estado actual de la sesión.</p>
            </div>
            <div class="rounded-lg bg-slate-50 p-4">
              <code class="font-mono text-sm font-bold text-secondary">GET /api/sessions/:uuid/qr/text</code>
              <p class="mt-2 text-sm text-slate-700">Devuelve el QR en ASCII crudo.</p>
            </div>
          </div>
        </div>

        <!-- WebSocket del Agente -->
        <div class="rounded-2xl border border-slate-200 bg-white p-8">
          <h3 class="text-2xl font-bold text-primary">WebSocket del Agente de IA</h3>
          <p class="mt-4 text-slate-700">
            El servidor WebSocket recibe objetos <code class="rounded bg-slate-100 px-2 py-1">ChatMessageDto</code> en <code class="rounded bg-slate-100 px-2 py-1">ws://127.0.0.1:8081</code> de manera interna.
          </p>
          
          <ol class="mt-6 space-y-3 text-sm text-slate-700">
            <li class="flex gap-3">
              <span class="font-bold text-secondary">1.</span>
              <span>El mensaje de WhatsApp se transforma a ChatMessageDto y se envía al WebSocket.</span>
            </li>
            <li class="flex gap-3">
              <span class="font-bold text-secondary">2.</span>
              <span>El agente procesa el historial de chat con el LLM configurado en tu .env.</span>
            </li>
            <li class="flex gap-3">
              <span class="font-bold text-secondary">3.</span>
              <span>La respuesta se reenvía al cliente de Baileys, quien entrega el mensaje al usuario de WhatsApp.</span>
            </li>
          </ol>
        </div>

        <!-- Notas adicionales -->
        <div class="rounded-2xl border border-tertiary/30 bg-tertiary/5 p-8">
          <h3 class="text-2xl font-bold text-primary">Notas Adicionales</h3>
          <ul class="mt-6 space-y-4 text-sm text-slate-700">
            <li class="flex gap-3">
              <span class="text-secondary font-bold">•</span>
              <span>La carpeta <code class="rounded bg-slate-100 px-2 py-1">frontend/dist/</code> está ignorada en git. Compílala con <code class="rounded bg-slate-100 px-2 py-1">bun run frontend:build</code> si haces cambios.</span>
            </li>
            <li class="flex gap-3">
              <span class="text-secondary font-bold">•</span>
              <span>Para resetear un bot, elimina su carpeta en <code class="rounded bg-slate-100 px-2 py-1">auth_info_baileys/</code> y crea una nueva sesión desde la UI.</span>
            </li>
          </ul>
        </div>

        <!-- CTA final -->
        <div class="text-center">
          <a
            href="https://github.com/juriel/chabito2"
            target="_blank"
            class="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-base font-semibold text-white transition hover:bg-secondary"
          >
            Ver Repositorio Completo en GitHub
          </a>
        </div>
      </section>
    `;
  }
}

customElements.define('chabi-instructions', ChabiInstructions);
