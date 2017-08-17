# Set the variable value in *.tfvars file
# or using -var="do_token=..." CLI option
variable "do_token" {}
variable "pub_key" {}
variable "pvt_key" {}

provider "digitalocean" {
  token = "${var.do_token}"
}

# Create a new SSH key
resource "digitalocean_ssh_key" "terraform" {
  name       = "terraform"
  public_key = "${file(var.pub_key)}"
}

resource "digitalocean_droplet" "www-1" {
  image = "26137125"
  name = "www-1"
  region = "nyc3"
  size = "1gb"
  private_networking = true
  ssh_keys = [
    "${digitalocean_ssh_key.terraform.id}"
  ]

  connection {
    user = "root"
    type = "ssh"
    private_key = "${file(var.pvt_key)}"
    timeout = "2m"
  }

  provisioner "remote-exec" {
    inline = [
      "export PATH=$PATH:/usr/bin:/usr/local/nodejs/bin",
      "sudo apt-get update",
      "git clone https://github.com/tompscanlan/github-matchmaker",
      "wget https://nodejs.org/dist/v8.4.0/node-v8.4.0-linux-x64.tar.xz",
      "xz -d node-v8.4.0-linux-x64.tar.xz",
      "tar -xvf node-v8.4.0-linux-x64.tar",
      "mkdir -p /usr/local/nodejs",
      "mv node-v8.4.0-linux-x64/* /usr/local/nodejs",
      "cd github-matchmaker",
      "sudo npm install -g yarn",
      "yarn"
    ]
  }
}
