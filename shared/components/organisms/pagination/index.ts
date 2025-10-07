import NextBtn from "./NextBtn";
import PagesNumber from "./PagesNumber";
import PrevBtn from "./PrevBtn";
import PaginationRoot from "./root";

export const Pagination = Object.assign(PaginationRoot, {
  Prev: PrevBtn,
  Next: NextBtn,
  Pages : PagesNumber
});
