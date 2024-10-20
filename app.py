from flask import Flask, render_template, jsonify, request, url_for
import requests
from passkey import GITHUB_TOKEN
from datetime import datetime

app = Flask(__name__)

GITHUB_API_URL = "https://api.github.com/users/{}/repos"

GITHUB_COMMITS_URL = "https://api.github.com/repos/{}/{}/commits"

@app.route('/')
def home():
    # Internal request to the /recent-repos/<username> route
    repos_url = url_for('get_recent_repos')
    response = requests.get(request.host_url[:-1] + repos_url)  # Making an internal call
    
    if response.status_code == 200:
        repos_data = response.json()
    else:
        repos_data = []

    # Limit the number of projects to 3 for the home route
    limited_repos_data = repos_data[:3]

    intros = ["👀 I'm interested in Programming ( Python , C++ , Java , JavaScript ) , Learning about new tech and playing Video Games",
             "🌱 I'm currently exploring the field of AI and ML and learning DSA in C++ , Flask, Sci-kit learn",
              "💞️ I'm looking to collaborate on Web Developement and Machine Learning projects",
               "📫 Connect with me : " ]
    return render_template('index.html', person = "Satyam", intros=intros, repos=limited_repos_data )

@app.route('/project')
def project():
    
    # Internal request to the /recent-repos/<username> route
    repos_url = url_for('get_recent_repos')
    response = requests.get(request.host_url[:-1] + repos_url)  # Making an internal call
    
    if response.status_code == 200:
        repos_data = response.json()
    else:
        repos_data = []

    return render_template('project.html', message='Project', repos=repos_data)

@app.route('/contact')
def contact():
    social_links = [
        {
            'url': 'https://www.linkedin.com/in/satyamkumarprasad/',
            'icon_class': 'fa-brands fa-linkedin',
            'color': '#2f4f4f'
        },
        {
            'url': 'https://github.com/Saty70',
            'icon_class': 'fa-brands fa-github',
            'color': '#2f4f4f'
        },
        {
            'url': 'https://www.instagram.com/saty.ikp',
            'icon_class': 'fa-brands fa-square-instagram',
        },
        {
            'url': 'https://x.com/Saty_ikp',
            'icon_class': 'fa-brands fa-square-x-twitter',
        },
        {
            'url': 'https://stackoverflow.com/users/17837709/satyam-kumar-prasad',
            'icon_class': 'fa-brands fa-stack-overflow',
        },
        {
            'url': 'https://open.spotify.com/user/317r2ag4ftz5upb5vo6x4i76hph4?si=e09dd1c8b5014ea5&nd=1&dlsi=1182da7011024f82',
            'icon_class': 'fa-brands fa-spotify',
        }
    ]
    
    return render_template('contact.html', message='Contact', social_links=social_links)

@app.route('/about')
def about():
    # Fetch the experience data from the /experience endpoint
    response = requests.get('http://127.0.0.1:5000/experience')  # Adjust the URL if needed
    
    if response.status_code == 200:
        experience_data = response.json()  # Get the experience data in JSON format
    else:
        experience_data = []

    # Pass the experience data to the about.html template
    return render_template('about.html', message='About', experiences=experience_data)


# @app.route('/recent-repos/', methods=['GET'])
# def get_recent_repos():
#     # Fetch the repositories for the given GitHub user
#     response = requests.get(GITHUB_API_URL.format('Saty70'))

#     if response.status_code != 200:
#         return response.json()
#         # return jsonify({"error": "User not found"}), 404
    
#     repos = response.json()

#     # Sort repos by creation date in descending order (most recent first)
#     sorted_repos = sorted(repos, key=lambda x: x['created_at'], reverse=True)

#     # Get the most recent 10 repos
#     recent_repos = sorted_repos[:10]

#     # Prepare the response data
#     recent_repos_info = [
#         {
#             'name': repo['name'],
#             'html_url': repo['html_url'],
#             'created_at': repo['created_at'],
#             'updated_at' : repo['updated_at'],
#             'full_name' : repo['full_name'],
#             'forks_count' : repo['forks_count'],
#             'language': repo['language'],
#             'description': repo['description']
#         }
#         for repo in recent_repos
#     ]

#     # return recent_repos_info
#     return recent_repos_info

def get_commit_count(owner, repo):
    """Get the total number of commits for a given repository."""
    commits_url = GITHUB_COMMITS_URL.format(owner, repo)
    headers = {
        'Authorization': f'token {GITHUB_TOKEN}'
    }
    
    # Fetch the commits for the repository
    response = requests.get(commits_url, headers=headers)
    
    if response.status_code == 200:
        commit_count = len(response.json())
        return len(commit_count)  # Returns the count of commits from the response
    else:
        return None

def parse_date(date_string):
    """Parse a date string into a datetime object."""
    try:
        # Try to parse the ISO 8601 format
        return datetime.strptime(date_string, "%Y-%m-%dT%H:%M:%SZ")
    except ValueError:
        try:
            # Try to parse the alternative format
            return datetime.strptime(date_string, "%a, %d %b %Y %H:%M:%S %Z")
        except ValueError:
            # Return None or raise an error if the format is unrecognized
            return None
        

@app.route('/recent-repos/', methods=['GET'])
def get_recent_repos():
    username = 'Saty70'

    # Add the Authorization header with the token
    headers = {
        'Authorization': f'token {GITHUB_TOKEN}'
    }

    # Fetch the repositories for the given GitHub user
    response = requests.get(GITHUB_API_URL.format(username), headers=headers)

    if response.status_code != 200:
        return jsonify(response.json()), response.status_code

    repos = response.json()

    # Parse and sort repos by update date in descending order
    for repo in repos:
        # Use the parse_date function to convert the 'updated_at' string
        updated_at = parse_date(repo['updated_at'])
        created_at = parse_date(repo['created_at'])
        if updated_at or created_at:
            repo['updated_at'] = updated_at
            repo['created_at'] = created_at
        # repo['commit_count'] = get_commit_count(username, repo['name'])

    # Sort repos based on the updated_at field
    sorted_repos = sorted(repos, key=lambda x: x['updated_at'], reverse=True)

    # Get the most recent 12 repos
    recent_repos = sorted_repos[:12]

    # Prepare the response data
    recent_repos_info = [
        {
            'name': repo['name'],
            'html_url': repo['html_url'],
            'created_at': repo['created_at'],
            'updated_at': repo['updated_at'],
            'full_name': repo['full_name'],
            'forks_count': repo['forks_count'],
            'language': repo['language'],
            'description': repo['description'],
            # 'commit_count' : repo['commit_count']
        }
        for repo in recent_repos
    ]

    # Return the recent repos data
    return jsonify(recent_repos_info)

# Function to calculate total months for each experience
def calculate_months(experience):
    current_date = datetime.now()  # Get current date for "Present" durations
    experiences_with_months = []

    for exp in experience:
        duration = exp['duration']
        start_str, end_str = duration.split(' - ')

        # Parse the start date
        start_date = datetime.strptime(start_str, '%b %Y')

        # If the end date is "Present", use the current date
        if 'Present' in end_str:
            end_date = current_date
        else:
            # Parse the end date
            end_date = datetime.strptime(end_str.split(' · ')[0], '%b %Y')

        # Calculate the difference in months
        total_months = (end_date.year - start_date.year) * 12 + (end_date.month - start_date.month) + 1

        # Add the calculated months to the experience entry
        exp['total_months'] = total_months
        experiences_with_months.append(exp)

    return experiences_with_months

@app.route('/experience', methods=['GET'])
def experience():
    experience_data = [
        {'title': 'Head of Web Development', 'desp': 'GDG on Campus - National Forensic Sciences University Delhi · Full-time', 'duration': 'Sep 2024 - Present · ', 'Location': 'New Delhi, Delhi, India'},
        {'title': 'Member', 'desp': 'Internet Society · Part-time', 'duration': 'May 2024 - Present · ', 'Location' : 'Bengaluru, Karnataka, India'},
        {'title': 'Intern', 'desp': 'CDAC,Noida · Internship', 'duration': 'May 2024 - Jun 2024 · ', 'Location' : 'India'}
    ]

    # Calculate months for each experience
    calculated_experiences = calculate_months(experience_data)

    # Return the updated experience data with total months as JSON
    return calculated_experiences