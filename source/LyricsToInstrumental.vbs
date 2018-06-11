' A script adding a button, that sets lyrics to "Instrumental"

Sub OnStartup
  Dim btn : Set btn = SDB.Objects("LyricsInsrumentalButton")
  If btn Is Nothing Then
    Set btn = SDB.UI.AddMenuItem(SDB.UI.Menu_TbStandard,0,0)
    btn.Caption = "Lyrics to Instrumental"
    btn.IconIndex = 17
    Set SDB.Objects("LyricsInsrumentalButton") = btn
  End If
  Call Script.UnRegisterHandler("btnClick")
  Call Script.RegisterEvent(btn,"OnClick","btnClick")
End Sub

Sub btnClick(btn)
  Call LyricsToInstrumental()
End Sub

Sub LyricsToInstrumental
  ' Define variables
  Dim list
  Dim itm
  Dim i

  ' Get list of selected tracks from MediaMonkey
  Set list = SDB.SelectedSongList 
  If list.count>0 Then 
    ' Process all selected tracks
    For i=0 To list.count-1
      Set itm = list.Item(i)
      itm.Lyrics = "Instrumental"
      ' Update the changes in DB
      itm.UpdateDB
    Next
  End If  
End Sub
