# Dr. Nathan Dantas - Site Odontológico

Site oficial do Dr. Nathan Dantas, especialista em odontologia com foco em restaurações, clareamento dental, facetas de resina e tratamentos preventivos.

## 🦷 Serviços Oferecidos

- **Restaurações Dentárias** - Materiais modernos que imitam perfeitamente a cor natural
- **Limpeza Profissional** - Remoção de tártaro e prevenção de problemas
- **Raspagem Periodontal** - Tratamento avançado para saúde gengival
- **Extrações Dentárias** - Incluindo sisos simples com técnicas minimamente invasivas
- **Clareamento Dental** - Até 8 tons mais branco com segurança
- **Facetas de Resina** - Transformação completa do sorriso
- **Prevenção Completa** - Check-ups e tratamentos preventivos
- **Emergência e Urgência** - Atendimento rápido para casos urgentes

## 🚀 Tecnologias Utilizadas

- **Next.js 15** - Framework React para produção
- **React 19** - Biblioteca JavaScript para interfaces
- **TypeScript** - Tipagem estática para JavaScript
- **Tailwind CSS 4** - Framework CSS utilitário
- **Lucide React** - Ícones modernos e responsivos

## 🎨 Paleta de Cores

Baseada no logo oficial do Dr. Nathan Dantas:

- **Azul Principal**: `#2F80ED` - Botões, destaques
- **Azul Turquesa**: `#00D2FF` - Hover, ícones secundários  
- **Azul Texto**: `#1E68B3` - Texto principal, links
- **Branco**: `#FFFFFF` - Plano de fundo
- **Cinza Claro**: `#F9F9F9` - Sections alternadas

## 📍 Múltiplas Localizações

O sistema foi desenvolvido para suportar facilmente múltiplas clínicas:

### Atual:
- **Aracaju/SE** - Prime OdontoMed

### Estrutura Preparada Para:
- Salvador/BA
- Recife/PE
- Outras cidades

## 🏗️ Estrutura do Projeto

```
src/
├── app/
│   ├── globals.css          # Estilos globais com cores customizadas
│   ├── layout.tsx           # Layout principal com SEO otimizado
│   └── page.tsx             # Página principal (landing page)
├── config/
│   └── locations.ts         # Configuração de localizações
└── components/              # (Para futuras expansões)
```

## 🛠️ Instalação e Desenvolvimento

### Pré-requisitos
- Node.js 18+
- npm 8+

### Comandos

```bash
# Instalar dependências
npm install

# Desenvolvimento
npm run dev

# Verificar tipos
npm run type-check

# Build para produção
npm run build:production

# Iniciar produção
npm run start
```

## 🔧 Configuração de Novas Localizações

Para adicionar uma nova localização, edite o arquivo `src/config/locations.ts`:

```typescript
export const LOCATIONS = {
  // ... localizações existentes
  
  novaLocalizacao: {
    name: "Nome da Clínica",
    address: "Endereço Completo",
    city: "Cidade - Estado",
    zipCode: "CEP",
    whatsapp: "URL_DO_WHATSAPP",
    mapEmbed: "URL_DO_GOOGLE_MAPS",
    instagram: "URL_DO_INSTAGRAM",
    hours: {
      weekdays: "Segunda a Sexta: 8h às 18h",
      saturday: "Sábado: 8h às 12h", 
      sunday: "Domingo: Fechado"
    }
  }
};
```

## 📱 Funcionalidades

### ✅ Implementadas
- Design responsivo (mobile-first)
- Navegação suave entre seções
- Carrossel de serviços (mobile)
- Sistema de depoimentos automático
- Galeria de resultados antes/depois
- Integração com WhatsApp
- Links para Instagram
- Mapa interativo do Google Maps
- SEO otimizado
- Múltiplas localizações (estrutura)

### 📈 Métricas de Sucesso
- +5.000 sorrisos transformados
- 98% de satisfação dos pacientes
- 3+ anos de experiência
- Atendimento humanizado

## 🎯 Conversão e Marketing

### Objeções Tratadas:
- Medo de dentista → Técnicas de ajuste consciente
- Falta de tempo → Horários flexíveis
- Medo de dor → Tecnologia moderna
- Dúvidas sobre resultados → +5.000 casos de sucesso

### CTAs Principais:
- Agendar consulta via WhatsApp
- Seguir no Instagram
- Descobrir tratamento ideal

## 📊 SEO e Performance

- Metadata otimizada
- Open Graph configurado
- Twitter Cards
- Schema markup preparado
- Imagens otimizadas
- Core Web Vitals otimizados

## 🔄 Deploy e Manutenção

### Ambientes Recomendados:
- **Vercel** (recomendado para Next.js)
- **Netlify** 
- **AWS Amplify**

### Monitoramento:
- Google Analytics
- Google Search Console
- Facebook Pixel (opcional)

## 📞 Contato

**Dr. Nathan Dantas**
- Instagram: [@dr.nathandantas](https://www.instagram.com/dr.nathandantas/)
- WhatsApp: [Agendar Consulta](https://wa.me/message/BMPNVWC4QTNTM1)
- Localização: Prime OdontoMed - Aracaju/SE

---

**Transformando sorrisos, transformando vidas** 🦷✨