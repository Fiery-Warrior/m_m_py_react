from django.shortcuts import render
import socket

def run_command(request):
    if request.method == "POST":
        # Get the command from the form
        command = request.POST.get("command")
        
        # Connect to the server
        server_ip = request.POST.get("server_ip")
        server_port = 80
        client_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        client_socket.connect((server_ip, server_port))
        
        # Send the command and receive the output
        client_socket.sendall(command.encode())
        output = client_socket.recv(1024).decode()
        client_socket.close()
        
        # Render the template with the output
        return render(request, "template.html", {"output": output})
    
    # Render the template for a GET request
    return render(request, "template.html")
