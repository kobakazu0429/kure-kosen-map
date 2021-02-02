export const pageview = (path: string) => {
  window.gtag("config", process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID ?? "", {
    page_path: path,
  });
};

export type Event = {
  action: string;
  category: string;
  label: string;
  value?: number | string;
};

export const event = ({ action, category, label, value }: Event) => {
  if (!process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID) {
    return;
  }

  window.gtag("event", action, {
    event_category: category,
    event_label: JSON.stringify(label),
    value,
  });
};
