import { Client } from "@notionhq/client";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();

  const notion = new Client({
    auth: config.public.notion_api_key,
  });

  const databases = await notion.databases.query({
    database_id: "948a3d77051f4f9b848319819d776709",
    sorts: [
      {
        property: "Name",
        direction: "ascending",
      },
    ],
    filter: {
      property: "Active this month",
      checkbox: {
        equals: true,
      },
    },
  });

  let teamMembers = [];

  databases.results.map((row) => {
    console.log(row);
    teamMembers.push({
      name:row.properties.Name.title[0]?.text?.content,
      role:row.properties.Role.rich_text[0]?.text?.content,
      avatar: row.properties.avatar?.files[0]?.file.url,
    });
  });

  return {
    stauts: 200,
    teamMembers
  };
});
