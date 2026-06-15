# OpenRouter - TypeScript CLI

A simple TypeScript command line application that sends user prompts to an AI model through the OpenRouter API and prints the AI response in the terminal.

## Features

- Accepts prompts from the command line
- Sends requests to OpenRouter AI models
- Returns and displays AI generated responses
- Uses environment variables for security
- Built with TypeScript

## Setup

Install dependencies:

### Using npm

```bash
npm install
```

### OR using pnpm

```bash
pnpm install
```

Create a `.env` file in the project root:

```env
OPENROUTER_API_KEY=your_api_key
MODEL_NAME=openai/gpt-4o-mini
```

## Usage

Run the application with a prompt:

```bash
pnpm dev "Explain REST APIs"
```

```bash
npm run dev "Explain REST APIs"
```

Example output:

```bash
AI Response:

REST APIs are...
```

## Environment Variables

| Variable | Description |
|---|---|
| OPENROUTER_API_KEY | Your OpenRouter API key |
| MODEL_NAME | The AI model to use |

## Tech Stack

- TypeScript
- Node.js
- OpenRouter API
- dotenv
- pnpm
