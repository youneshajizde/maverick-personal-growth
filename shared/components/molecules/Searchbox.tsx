"use client";

import { cn } from "@/shared/utils/functions";
import { SearchIcon } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { KeyboardEvent, useEffect, useState } from "react";

const Searchbox = ({
  className,
  searchIn,
}: {
  className?: string;
  searchIn: string;
}) => {
  const [query, setQuery] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const initialQuery = searchParams.get("query") || "";
    setQuery(initialQuery);
  }, [searchParams]);

  const handleSearch = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const trimmedQuery = query.trim();
      const params = new URLSearchParams(searchParams.toString());

      if (trimmedQuery) {
        params.set(`filters[${searchIn}][$contains]`, trimmedQuery);
      } else {
        params.delete(`filters[${searchIn}][$contains]`);
      }

      router.push(`?${params.toString()}`);
    }
  };

  return (
    <div
      className={cn(
        `w-full bg-white rounded-xl f-align gap-1.5 p-3`,
        className
      )}
    >
      <SearchIcon className="" size={20} />
      <input
        onKeyDown={handleSearch}
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        placeholder="Search between more than 1000 coaches"
        className="w-full text-sm outline-none placeholder:text-xs"
      />
    </div>
  );
};

export default Searchbox;
