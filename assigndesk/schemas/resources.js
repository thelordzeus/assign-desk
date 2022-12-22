export default {
  name: "resources",
  title: "Resources",
  type: "document",

  fields: [
    {
      name: "name",
      title: "Subject Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "resourceLink",
      title: "Resource Link",
      description: "Paste the Drive PDF link.",
      type: "string",
    },
  ],
  preview: {
    select: {
      title: "name",
    },
  },
};
