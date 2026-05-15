<?php
$username = 'whoadmin';
$password_hash = md5('whopassword');

session_start();

if (!isset($_SESSION['authenticated'])) {
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $input_username = $_POST['username'];
        $input_password = $_POST['password'];

        if ($input_username === $username && md5($input_password) === $password_hash) {
            $_SESSION['authenticated'] = true;
        } else {
            echo 'Invalid username or password.';
            showLoginForm();
            exit;
        }
    } else {
        showLoginForm();
        exit;
    }
}

$file_path = 'overrides.js';

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['save'])) {
    $new_content = $_POST['file_content'];

    $backup_file = 'overrides-' . date('m-d-Y-H-i-s') . '.js';
    copy($file_path, $backup_file);

    file_put_contents($file_path, $new_content);

    echo "File saved successfully! Backup created: $backup_file<br><br>";
}

$file_content = file_get_contents($file_path);
?>

<!DOCTYPE html>
<html>

<head>
    <title>Overrides.js Editor</title>
</head>

<body>
    <h1>Overrides.js Editor</h1>

    <form method="post">
        <textarea name="file_content" rows="20" cols="100"><?php echo htmlspecialchars($file_content); ?></textarea><br>
        <input type="submit" name="save" value="Save Changes">
    </form>

    <h2>Current File Content</h2>
    <pre><?php echo htmlspecialchars($file_content); ?></pre>
</body>

</html>

<?php
function showLoginForm()
{
    echo '<h1>Login</h1>
    <form method="post">
        Username: <input type="text" name="username"><br>
        Password: <input type="password" name="password"><br>
        <input type="submit" value="Login">
    </form>';
}
?>