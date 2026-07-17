export const revalidate = 60;

import HomeClient from "@/components/HomeClient";

import {
  getLocalizedMenu,
  getInfo,
} from "@/lib/sheets";

export default async function Home() {
  const menu = await getLocalizedMenu();
  const info = await getInfo();

  return (
    <HomeClient
      menu={menu}
      info={info}
    />
  );
}