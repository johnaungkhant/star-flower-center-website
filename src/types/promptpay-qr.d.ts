declare module "promptpay-qr" {
  interface PromptPayOptions {
    amount?: number;
  }
  export default function generatePayload(
    target: string,
    options?: PromptPayOptions
  ): string;
}
