# ACIT 3475 - Assignment 1 

 

## Jovica Kuzmanovic, SET - A 

 

 

## Introduction 

This assignment has 3 parts. 

 Part 1 is the [video presentation](https://www.youtube.com/watch?v=_VlP2XQntnw) that you may watch on the link posted in Part 1 section 

 

 In Part 2, I have deployed my website locally using caddy.  

 In Part 3, I have deployed my portfolio website using AWS and caddy. You can see my portfolio website on the link below. [Jovica's Portfolio](https://yovitsa-kuzmanovic.site) 

 

### Part 1 

Click on  the link below and you can watch my video presentation for Part 1 

[Assignment 1 Video Presentation](https://www.youtube.com/watch?v=_VlP2XQntnw) 

 

### Part 2 

In this part of the assignment I have installed Caddy on my local(Windows) machine,  built a personal portfolio website and deployed that website locally. 

 

For the coding part of the assignment, I have used HTML, CSS and JS for frontend and Flask for my backend functionality. 

 

#### Step 1:Installing Caddy Locally 

 

1. First we need to download caddy official version from the official website:      

    [Caddy Windows Download Installation](https://caddyserver.com/download) 

 

2. After downloading the installation file, navigate to the C drive and create a folder named 'Caddy'. 

3. Move the installation file to your newly created folder 'Caddy'. As this is binary file download, you do not have to actually install it. After moving the file to `C:Caddy/` run the command `caddy version` in your terminal and you should see the output similar to the image below: 

    ![Caddy works](/static/images/caddy%20version.png) 

4. Create and configure your Caddy file, your Caddyfile configuration should look similar to the below image. `root` is getting everything and serving everything from the location where I have stored my application directory. I have also configured `reverse_proxy` for localhost on the port 5000, this will route all request to port 5000, this is default flask port, as my application is using flask for backend. 

    ![caddy file](/static/images/image_w_c_file.png) 

 

5.Start Caddy by running the following command in the power shell terminal.  

 

        .\caddy.exe run  

 

6. Now my application is hosted locally as shown on image below: 

    ![local-https](/static/images/https_caddy.png) 

 

### Part 3 

In this part I have deployed my website using AWS and caddy, to deploy my flask backend logic I have used [gunicorn](https://docs.gunicorn.org/en/stable/).  

 

Step 1 Launch AWS EC2 Instance: 

1.Log in to AWS Management Console and go to EC2 Dashboard. 

     

2.Click Launch Instance and configure: 

     

        1. For image select Ubuntu 22.04 LTS. 

        2. Instance Type: t2.micro (free tier). 

        3. Key Pair: Create/download an SSH key. 

        4. Security Group: Check ports 80, 443, and 22. 

        5.In the additional configuration add the code from the image below to install `caddy`. This way caddy will be already installed when I run my instance 

     

I have add the commands below in the additional coniguration, when seting up the EC2 instances, this will install Caddy on my EC2 instance.

![caddy](/static/images/yaml.png)

3. Run the command below to start caddy and enable it on start of your system: 

 

        `sudo systemctl enable --now caddy` 

 

4. Check if caddy is installed and running by using the command below: 

 

        `sudo systemctl status caddy` 

 

Your output show be similar to the image below: 

![image caddy running on linux](/static/images/linux_caddy_works.png) 

5. I have used sftp to transfer my application directory from my local machine to my aws instance. First I have connected sftp to my instace by using the command below: 

 

        `sftp -i !/.ssh/mykey.pem ubuntu@<ec2-instance-ip-address>` 

 

After connecting to my EC2 instance, I have transferred my files to my EC2 by using  the command below: 

 

        `put <path-to-my-directory>` 

 

6. After uploading and unzipping the application directory, I have used unzip for that. I have used the command `sudo apt install unzip` and then  

        `unzip <directory-name>` 

7. Create and move your application directory, to a newly www directory
    
        ` mkdir  -p /var/www `

And then move the application directory to `www` directory

8. Move to the application directory and install Python by using the command 

      

         `sudo apt install python3` 

 

9. Create a python virtual environment by running the command 

 

        `python3 -m -venv venv` 

     

    After that run the command below to activate venv, if everything is alright you should see (venv) same as the image below 

     

10. Run the following command to install the required package for this assignment,this will install Flask and gunicorn: 

     

        `pip install -R requirements.txt` 

 


12. Start gunicorn by running the command below, 8000 is the default gunicorn port. Gnicorn is used here so caddy can forward reverse proxy request to my flask application:
** Gunicorn 'Green Unicorn' is a Python WSGI HTTP Server for UNIX. It's a pre-fork worker model. The Gunicorn server is broadly compatible with various web frameworks, simply implemented, light on server resources, and fairly speedy. ** 

 

        `gunicorn -w 3 -b 127.0.0.1:8000 app:app` 

  

14. Create a systemd service for Guncicorn 

     

    Run the following command to create a service file: 

 

        `sudo vim /etc/systemd/system/gunicorn.service` 

 

    add the following content to the service file: 

     

     

        ` 

        [Unit] 

        Description=Gunicorn instance to serve portfolio 

        After=network.target 

 

        [Service] 

        User=ubuntu 

        Group=ubuntu 

        WorkingDirectory=/home/ubuntu/portfolio 

        ExecStart=/home/ubuntu/portfolio/venv/bin/gunicorn -w 3 -b 127.0.0.1:8000 app:app 

 

        [Install] 

        WantedBy=multi-user.target  

        ` 

 

 

After this we need to run the following commands to reload and start/enable gunicorn service: 

 

    `sudo systemctl daemon-reload` 

 

    `sudo systemctl enable --now gunicorn.service` 

 

13. After purchasing domain I used Route 53 in AWS to configure the DNS settings for my domain. Here is more information about [Route 53](https://docs.aws.amazon.com/route53/) 

 

14. Edit the Caddyfile which is located at `/etc/caddy/Caddyfile`
Below is an example of a Caddyfile:

![Caddyfile configuration IMAGE](/static/images/caddyFile.jpg) 

16. Run the command to restart caddy

        `sudo systemctl restart caddy`

17. Check the status of the caddy and ensure that everything works well.

        `sudo systemctl status caddy`

18. Access the [domain](https://yovitsa-kuzmanovic.site). 

19. The final result should look like this:

![final](/static/images/final.png)



 
