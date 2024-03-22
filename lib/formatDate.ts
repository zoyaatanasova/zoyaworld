import { parseISO, format } from "date-fns";
import { bg } from "date-fns/locale";

export const formatDate = (date: string): string =>
  format(parseISO(date), "dd MMMM yyyy", {
    locale: bg,
  });
