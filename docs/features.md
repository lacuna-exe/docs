# Modules

You can enable these features by typing [`c!module <module> on`](/commands#cmodule).

| Module | Description |
|:-------|:------------|
| `allow-spam` | Allow people to count multiple times in a row, instead of forcing them to wait for the next person to count first. |
| `talking` | Allow people to send a text message after the count. Ex. `1 Hi there!` |
| `recover` | Make the bot try to recover itself after it goes offline by removing unprocessed messages in the counting channel when it goes online. |
| `reposting` | Repost the message being sent in a nice embed, preventing the users from editing or self-deleting their count later on. |
| `webhook` | Same as the module `reposting` except that it will repost it in a nice embed, impersonating the user who sent it. |

# Regex filters

Regex filters are filters you can set up in your counting channel that will remove any message matching your filter. This is usually used together with the talking-module. To set this up, check out [`c!addregex`](/commands#caddregex) for more information. Also check out [`c!listregex`](/commands#clistregex) and [`c!removeregex`](/commands#cremoveregex).

# Notifications

If you want to keep yourself up-to-date in your counting channel, or someone else's counting channel, you can set it up so Countr will send you a DM whenever you'd like. To set this up, check out [`c!notifyme`](/commands#cnotifyme) for more information. Also check out [`c!notifications`](/commands#cnotifications) and [`c!removenotif`](/commands#cremovenotif).

# Timeout role

If you want to give users who fail to count a role (because they thought 1+1 was 3 or something), you can do exactly that. To set this up, check out [`c!timeoutrole`](/commands#ctimeoutrole).