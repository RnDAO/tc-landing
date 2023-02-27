import { Client } from "@notionhq/client";

export default eventHandler(async (event) => {
  console.log('dsadds',event);
  const notion = new Client({
    auth: process.env.NOTION_APIKEY,
    baseUrl: "https://api.notion.com",
  });

  console.log(notion,'s');


  const database_id = "d4138ff03c214ccf95366aabd321c371";

  const team = await notion.databases.query({
    database_id: database_id,
  });

  return {
    team,
  };
});
