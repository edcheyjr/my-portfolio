export default (S :any) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Settings')
        .child(
          S.editor()
            .id('settings')
            .schemaType('settings')
            .documentId('settings')
        ),
      ...S.documentTypeListItems().filter(
        (listItem:any) => !['settings'].includes(listItem.getId())
      ),
    ])
