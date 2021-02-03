interface Window {
  gtag(type: "config", googleAnalyticsId: string, { page_path: string }): void;

  gtag(
    type: "event",
    eventAction: string,
    fieldObject: {
      event_label: string;
      event_category: string;
      value?: number | string;
    }
  ): void;
}

declare const window: Window;
