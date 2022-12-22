export default {
  name: "assignment",
  title: "Assignment",
  type: "document",
  // maybe add an icon later here.
  fields: [
    {
      name: "name",
      title: "Assignment Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "date",
      title: "Due Date",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "solution",
      title: "Solution Link",
      description: "Paste the Drive PDF link.",
      type: "string",
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "date",
    },
  },
};
