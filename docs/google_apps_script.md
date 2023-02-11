# Upload the codes to Google App script

1. Go [Google Apps Script](https://script.google.com/u/1/home) and new a project.

   ![image](https://user-images.githubusercontent.com/30837573/198055474-565de3d2-87d0-46d1-9ffa-56b93e58e827.png)

2. Copy and paste the codes from [src](/src/) to Google Apps Script.

   ![image](https://user-images.githubusercontent.com/30837573/218259925-11b7ddc2-35e9-4727-8eb1-2172d306aaf7.png)

3. Set the OpenAI API key, Tenor API key and Tenor client key.

   ![image](https://user-images.githubusercontent.com/30837573/218260227-ee7add58-3553-46a2-855e-ad961c7427a5.png)

4. Set the Sheet ID and Discord webhook. Check the function **pushEnglishVocabulary** is selected and then click **Run**.

   ![image](https://user-images.githubusercontent.com/30837573/218260603-55483fd9-a1ee-44f3-96fc-a97b110c8787.png)

5. Click **Review permissions**.

   ![image](https://user-images.githubusercontent.com/30837573/198056458-cbf2246f-05ee-40c7-bcbf-f3a36c6db512.png)

6. Choose your account.

   ![image](https://user-images.githubusercontent.com/30837573/198056565-b2556a65-1269-4f36-9473-3ef89ed58d0b.png)

7. Click **Go to _Project_name_ (unsafe)**

   ![image](https://user-images.githubusercontent.com/30837573/198056765-2495e723-67ca-4591-b1e5-9bc629f90e0a.png)

8. This script will access Google Sheets. Click **Allow**

   ![image](https://user-images.githubusercontent.com/30837573/198056935-88c6d84a-1654-4cf9-9d50-531efe56a6a7.png)

9. Check the result. (The message should be pushed to Discord.)

   ![image](https://user-images.githubusercontent.com/30837573/198058671-36b23d8a-0fbc-4191-836c-6c2565675be3.png)

10. Check your Discord.

    ![image](https://user-images.githubusercontent.com/30837573/218260988-9bb30699-4151-49d7-9c90-2a1ddc222f1d.png)

11. Check your Google sheets, the **Notified** should be set to **yes**.

    ![image](https://user-images.githubusercontent.com/30837573/218261055-f117d215-e123-4a57-81cd-4dd1d3ac4b7c.png)

12. Go back to Apps Script and click clock icon and add the triggers.

    ![image](https://user-images.githubusercontent.com/30837573/198059903-dc8a1178-641c-4c8d-be22-e3711c9962ea.png)

13. Set the triggers to whatever you want.

    ![image](https://user-images.githubusercontent.com/30837573/198060091-06591ec9-e4fe-4539-9184-52ef6bd7b254.png)
