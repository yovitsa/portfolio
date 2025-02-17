# ACIT 3475 - Assignment 1 

 

## Jovica Kuzmanovic, SET - A 

 

 

## Introduction 

This assignemnt has 3 parts. 

 Part 1 is the [video presenatation](https://www.youtube.com/watch?v=_VlP2XQntnw) that you may watch on the link posted in Part 1 section 

 

 In Part 2 I have deployed my webiste locaaly usign caddy.  

 In Part 3 i ahve deployed my portfolio webiste using AWS and caddy. You can see my portfolio webiste on the link below. 

[Jovica's Portfolio](yovitsa-kuzmanovic.site) 

 

### Part 1 

Click on  the link below and you can watch my video presenatation for Part 1 

    [Assignemnt 1 Video Presenatation](https://www.youtube.com/watch?v=_VlP2XQntnw) 

 

### Part 2 

In this part of the assigment I have installed Caddy on my local(Windows) machine,  built a personal portfolio webiste and deployed that webiste locally. 

 

For the coding part of the assigment, I have used HTML, CSS and JS for frontend and Flask for my backend functionality. 

 

#### Step 1:Installing Caddy Locally 

 

1. First we need to download caddy officall version from the officall website:      

    [Caddy Windows Download Installation](https://caddyserver.com/download) 

 

2. After downloading the installation file, nagvigate to th your C drive and create a folder named 'Caddy'. 

3. Move the installation file to your newly created folder 'Caddy'. As this is binary file download, yo do not have to actually install it. After moving the file to `C:Caddy/` run the command `caddy version` in your terminal and you should see the output similar to the image below: 

    ![Caddy works](/static/images/caddy%20version.png) 

4. Create and configure your Caddy file, your Caddyfile configuration should look similar to the below image. `root` is getting everything and serving everything from the location where I have stored my application directory. I have also configred `reverse_proxy` for localhost on the port 5000, this will route all reuest to prot 5000, this is default flask port, as my application is using flask for backend. 

    ![caddy file](/static/images/image_w_c_file.png) 

 

5.Start Caddy by running the following command in the power shell terminal.  

 

        .\caddy.exe run  

 

6. Now my application is hosted locally as shown on image below: 

    ![local-hhtps](/static/images/https_caddy.png) 

 

### Part 3 

In this part I have deployed my webiste using AWS and caddy, to deploy my flask backend logic I have used [gunicorn](https://docs.gunicorn.org/en/stable/).  

 

Step 1 Launch AWS EC2 Instance: 

1.Log in to AWS Management Console and go to EC2 Dashboard. 

     

2.Click Launch Instance and configure: 

     

        1. For image select Ubuntu 22.04 LTS. 

        2. Instance Type: t2.micro (free tier). 

        3. Key Pair: Create/download an SSH key. 

        4. Security Group: Check ports 80, 443, and 22. 

        5.In the addtional configuration add the code form the image below to install `caddy`. THis way caddy will be already installed when I run my instance 

     

2. Click Launch and wait for the instance to start, after that connect to your instance using ssh. [Imahge of connecting to aws] 

3. Run the command below to start caddy and enable it on start of your system: 

 

        `sudo systemctl enable --now caddy` 

 

4. Check if caddy is installe running the command below: 

 

        `sudo systemctl status caddy` 

 

Your output show be similar to the image below: 

![image caddy running on linux](/static/images/linux_caddy_works.png) 

5. I have used sftp to transfer my application direcroty from my local machine to my aws instance. First I have connected sftp to myinstace by using the command below: 

 

        `sftp -i !/.ssh/mykey.pem ubuntu@<ec2-instance-ip-address>` 

 

After connecting to my EC2 isnance, I have transffered my files to my EC2 by using  the command below: 

 

        `put <path-to-my-directory>` 

 

6. After uploading and unziping the application directory, I have used unzip for that. I have used the command `sudo apt install unzip` and then  

        `unzip <directory-name>` 

7. Create and move your application directory, to a newly www directory
    
        ` mkdir  -p /var/www `

And then move the application directory to `www` directory

8. Move to the application directory and install Pyhton by usign the command 

      

         `sudo apt install python3` 

 

9. Create a python virtual enviorment by running the command 

 

        `python3 pip -venv venv` 

     

    After that run the command below to activate venv, if everything is alright you should see (venv) same as the image below 

     

10. Run the following command to install the required package for this assignment,this will install Flask and gunicorn: 

     

        `pip install -R requrments.txt` 

 

11. Start gunicorn by running the command below, 8000 is theh default gunicorn port. GUnicorn is used here so caddy can forward revers proxy request to my flask application: 

 

        `gunicorn -w 3 -b 127.0.0.1:8000 app:app` 

 

If everything went well you should ee the output similar to the image below: 

    [Image] 

 

12. Create a systemd service for Guncicorn 

     

    Run the folwoing command to create a service file: 

 

        `sudo vim /etc/systemd/system/gunicorn.service` 

 

    add the following content to the service file: 

     

     

        ` 

        [Unit] 

        Description=Gunicorn instance to serve portfolio 

        After=network.target 

 

        [Service] 

        User=ubuntu 

        Group=ubuntu 

        WorkingDirectory=/home/ubuntu/your-portfolio 

        ExecStart=/home/ubuntu/your-portfolio/venv/bin/gunicorn -w 3 -b 127.0.0.1:8000 app:app 

 

        [Install] 

        WantedBy=multi-user.target  

        ` 

 

 

After this we need to run the following commands to reload and start/enable gunicorn service: 

 

    `sudo systemctl daemon-reload` 

 

    `sudo systemctl enable --now gunicorn.service` 

 

13. After purchansing domain I used Route 53 in AWS to configure the dns settings for my domain. Here is more information about [Route 53](https://docs.aws.amazon.com/route53/) 

 

14. Edit the Caddyfile which is located at `/etc/caddy/Caddyfile`

15. Caddyfile file configuration file.
16. Run the command to restart caddy

        `sudo systemctl restart caddy`

17. Check the status of the caddy and ensure that everything works well"

        `sudo systemctl status caddy`

18. Access the [domain](yovitsa-kuzmanovic.site) 

19. The final result should look like this



 