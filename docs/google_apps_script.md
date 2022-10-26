# Upload the codes to Google App script

1. Go [Google Apps Script](https://script.google.com/u/1/home) and new a project.

   ![image](https://user-images.githubusercontent.com/30837573/198055474-565de3d2-87d0-46d1-9ffa-56b93e58e827.png)

2. Copy and paste the codes from [src](/src/)

   ![image](https://user-images.githubusercontent.com/30837573/198057392-8bcd964e-a48b-42a2-a786-2cc4cce38c28.png)

3. Copy and paste the Tenor API key to **tenorApi.gs**, you got it from [here](/docs/tenor_api_key.md#L7)

   ![image](https://user-images.githubusercontent.com/30837573/198058012-1d91b8e0-686c-4179-a018-d6e671fb5769.png)

4. Paste the Sheet ID to **pushToDiscord.gs** you got it from [here](/docs/google_apps_script.md#L28), paste the Discord webhook you got it from [here](/docs/discord_webhook.md#L9), check the function **pushEnglishVocabulary** is selected and then click **Run**

   ![image](https://user-images.githubusercontent.com/30837573/198058424-2cae7083-8e9f-47c8-89c4-e62245f7ab46.png)

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

10. Check your Discord, click **Explanation** will show the plaintext.

    ![image](https://user-images.githubusercontent.com/30837573/198065405-03a0b476-1b17-4abe-a2bb-8445557181ab.png)

11. Nice Gifs is coming as well.

    ![image](https://user-images.githubusercontent.com/30837573/198059313-019df3c2-b96c-409e-95bd-d03426aa6892.png)

12. Check your Google sheets, the **Notified** should be set to **yes**.

    ![image](https://user-images.githubusercontent.com/30837573/198059696-77a74808-60d4-4ea0-a8d0-3bce8078f889.png)

13. Go back Apps Script and click clock icon and click add trigger.

    ![image](https://user-images.githubusercontent.com/30837573/198059903-dc8a1178-641c-4c8d-be22-e3711c9962ea.png)

14. Set the triggers to whatever you want.

    ![image](https://user-images.githubusercontent.com/30837573/198060091-06591ec9-e4fe-4539-9184-52ef6bd7b254.png)
