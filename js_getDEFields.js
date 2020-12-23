<script runat="server">
Platform.Load("Core","1");

var dataExtensionFields = DataExtension.Init('datetest').Fields.Retrieve();

if (dataExtensionFields.length > 0) {
    for (var i = 0; i < dataExtensionFields.length; i++) {
        Write('<br>' + dataExtensionFields[i].Name);
    }
}

</script>




