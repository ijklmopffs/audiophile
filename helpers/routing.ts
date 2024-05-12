import { useRouter } from "next/router";

export const HandleButtonClick = (slug: string) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/headphones/${slug}`);
  };
  return handleClick;
};
