Dim but : Set but = SDB.Objects("LyricsInsrumentalButton")
If Not (but Is Nothing) Then
  but.Visible = False
  Set SDB.Objects("LyricsInsrumentalButton") = Nothing
End If
