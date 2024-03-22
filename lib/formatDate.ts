import { parseISO, format } from "date-fns";
import { bg } from "date-fns/locale";

export const formatDate = (date: string): string => {
  return format(parseISO(date), "dd MMMM yyyy", {
    locale: bg,
  });
};
