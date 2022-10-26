# Design the Google Forms and Google Sheets

- Go [Google Forms](https://www.google.com/forms) and design a form. There are two sample here.

- English sample
  ![english](https://user-images.githubusercontent.com/30837573/198034443-eeaa45b3-61e3-4d75-adc5-e743e1573371.png)

- Japanese sample
  ![japanese](https://user-images.githubusercontent.com/30837573/198034449-3ac6faaf-5545-4d6d-b9d4-7d40efe537a7.png)

---

1. Click "Create Spreadsheet" icon in "Responses" tab.

   ![image](https://user-images.githubusercontent.com/30837573/198035213-a3f8c3d3-b5df-4501-9a7b-e14afb4b9254.png)

2. Click "Create".

   ![image](https://user-images.githubusercontent.com/30837573/198035335-291a04c6-4575-4485-aa81-1b506ae9eb29.png)

3. Set up Google Sheets.

   - **B1** cell must be **Vocabulary** (case-sensitive).
     - [vocabularyNotificator.gs#L38](https://github.com/sam159247/review-vocabulary-everyday/blob/main/src/vocabularyNotificator.gs#L38)
   - **E1** cell must be **Explanation** (case-sensitive).
     - [vocabularyNotificator.gs#L41](https://github.com/sam159247/review-vocabulary-everyday/blob/main/src/vocabularyNotificator.gs#L41)
   - Add a new column called **Notified** into last column manually.
   - Note that **Sheet ID** is not full url.

   ![image](https://user-images.githubusercontent.com/30837573/198045598-a14e8a24-6033-45db-a4f0-33b5c4061355.png)

4. Try input a vocabulary.

   ![image](https://user-images.githubusercontent.com/30837573/198039970-d60941db-4f24-4b73-89c7-6fee9552b0a3.png)

5. Check the result on Google Sheets.

   ![image](https://user-images.githubusercontent.com/30837573/198040397-515c4e45-4bac-4569-ae79-bb041fb8b5b3.png)
