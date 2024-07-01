function FindChildM(PropArray, ValuesArray, PObject, Depth, Click, Keys, text) {


    //var PropNArray = new Array(PropArray);
    //var ValuesNArray = new Array(ValuesArray);
    Delay(2000);
    Sys.Refresh();
    Aliases.Skype.Refresh();
    Aliases.Skype.RefreshMappingInfo();
    
    var w = PObject.FindChild(PropArray, ValuesArray, Depth);

    // Processes the search results
    if (w.Exists != false) {

        // Log.Message("Object Found successfully");
        Log.Checkpoint("Button Found successfully");
        //Log.Message("Button found successfully " + w.WndCaption)
        Sys.Refresh();
        Aliases.Skype.Refresh();
        Aliases.Skype.RefreshMappingInfo();
        if(Click==true){
          w.Click();
        }
        if(Keys==true){
          w.Keys(text);
        }
        return true;

    } else
        Log.Error("The object was not found.");
}