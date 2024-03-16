"use client";
import React, { FC } from "react";
import { useRouter, useSearchParams } from "next/navigation";

interface PaginationComponentProps {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

const PaginationComponent: FC<PaginationComponentProps> = ({
  hasNextPage,
  hasPreviousPage,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = searchParams.get("page") ?? "1";
  const per_page = searchParams.get("per_page") ?? "10";

  return (
    <div className="flex justify-center items-center gap-5">
      <button
        className="border p-2 rounded hover:bg-black/50"
        onClick={() => {
          router.push(
            `/dashboard/?page=${Number(page) - 1}&per_page=${per_page}`
          );
        }}
      >
        {"<<"}
      </button>
      <div>
        {page}/{Math.ceil(10 / Number(per_page))}
      </div>
      <button
        className="border p-2 rounded hover:bg-black/50"
        onClick={() => {
          router.push(
            `/dashboard/?page=${Number(page) + 1}&per_page=${per_page}`
          );
        }}
      >
        {">>"}
      </button>
    </div>
  );
};

export default PaginationComponent;
