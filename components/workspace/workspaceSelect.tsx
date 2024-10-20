"use client";
import * as React from "react";
import { Check, ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useQuery } from "@tanstack/react-query";
import { getUserRepositoryName } from "@/lib/github/repository";

export default function ExampleClientComponent() {
  const { data: repositories } = useQuery({
    queryKey: ["repos"],
    queryFn: getUserRepositoryName,
  });
  console.log(repositories);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const exisitingquery = searchParams.get("workspace");

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  React.useEffect(() => {
    if (exisitingquery) {
      setValue(exisitingquery);
    }
  }, [exisitingquery]);

  return (
    <div className="absolute top-4 right-6 ">
      {/* <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[200px] justify-between"
          >
            {value
              ? repositories.find((repository) => repository === value)?.label
              : "Select repository..."}
            <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput placeholder="Search repository..." />
            <CommandList>
              <CommandEmpty>No repository found.</CommandEmpty>
              <CommandGroup>
                {repositories.map((repository) => (
                  <CommandItem
                    key={repository}
                    value={repository}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue);
                      setOpen(false);
                      router.push(
                        pathname +
                          "?" +
                          createQueryString("workspace", currentValue)
                      );
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === repository ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {repository}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover> */}
    </div>
  );
}

// <div className="absolute top-4 right-10   flex justify-end p-2 border rounded-xl ">
//   <p>select workspace</p>

//   {/* using useRouter */}
//   <button
//     onClick={() => {
//       // <pathname>?sort=asc
//       router.push(pathname + "?" + createQueryString("sort", "asc"));
//     }}
//   >
//     ASC
//   </button>

//   {/* using <Link> */}
//   <Link
//     href={
//       // <pathname>?sort=desc
//       pathname + "?" + createQueryString("sort", "desc")
//     }
//   >
//     DESC
//   </Link>
// </div>
