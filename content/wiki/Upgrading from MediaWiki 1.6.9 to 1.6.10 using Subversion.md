---
tags: subversion mediawiki updates
cache_breaker: 1
---

# Backup

    OLD_VERSION="1.6.9"
    NEW_VERSION_TAG="REL1_6_10"
    INSTALL_PATH="path_where_software_is_installed"
    DATABASE_USER="database_user"
    DATABASE_NAME="database_name"
    APACHE_USER="user_that_apache_runs_as"

    # backup the database
    sudo -v
    sudo mysqldump --opt -u "${DATABASE_USER}" -p -h localhost \
        "${DATABASE_NAME}" | bzip2 -c > ~/mw-${OLD_VERSION}-db-backup.tar.bz2

    # backup the installed files
    cd "${INSTALL_PATH}"
    sudo tar -c -v . > ~/mw-${OLD_VERSION}-files-backup.tar
    gzip --verbose -9 ~/mw-${OLD_VERSION}-files-backup.tar

# The [Subversion](/wiki/Subversion) update

    sudo -u "${APACHE_USER}" -H svn switch "http://svn.wikimedia.org/svnroot/mediawiki/tags/${NEW_VERSION_TAG}/phase3/"

Output:

    U    img_auth.php
    U    skins/MySkin.deps.php
    U    skins/Chick.deps.php
    U    skins/MonoBook.deps.php
    U    skins/Simple.deps.php
    U    thumb.php
    U    includes/GlobalFunctions.php
    U    includes/AjaxDispatcher.php
    U    includes/EditPage.php
    U    includes/OutputPage.php
    U    includes/StreamFile.php
    U    includes/DefaultSettings.php
    U    includes/Metadata.php
    U    RELEASE-NOTES
    U    trackback.php
    Updated to revision 20020.

Then, update any [Subversion externals](/wiki/Subversion_externals) which might be present (there are none, but it doesn't hurt to do an `svn up` anyway:

    sudo -u "${APACHE_USER}" -H svn up

Output:

    At revision 20020.

## [Subversion](/wiki/Subversion) update notes

There were some minor differences between the two [MediaWiki](/wiki/MediaWiki) installs. The instructions as above worked for one of the wikis. That wiki has much more restrictive permissions (no file uploads etc) and runs in [PHP Safe Mode](/wiki/PHP_Safe_Mode). The other wiki has slightly relaxed permissions so as to allow file uploads but does not run under [PHP Safe Mode](/wiki/PHP_Safe_Mode). It runs in a root-owned directory whose group is the same as the [Apache](/wiki/Apache) webserver, but all other users are disallowed access; so the upgrade procedure is slightly different:

    sudo -s
    NEW_VERSION_TAG=REL1_6_10 # must set variable again (new root shell)
    cd install_dir
    svn info
    svn switch "http://svn.wikimedia.org/svnroot/mediawiki/tags/${NEW_VERSION_TAG}/phase3/"
    svn up

Update permissions and ownership on modified files:

    chown root:apache_user includes/*.php includes/normal/*.php languages/*.php maintenance/*.php
    chmod 640 *.php includes/*.php includes/normal/*.php languages/*.php maintenance/*.php
    exit

# Running [MediaWiki](/wiki/MediaWiki)'s update script

[MediaWiki](/wiki/MediaWiki)'s [upgrade notes](http://svn.wikimedia.org/svnroot/mediawiki/tags/REL1_6_10/phase3/UPGRADE) state that you should run the `update.php` script when upgrading:

> From the command line, browse to the maintenance directory and run the update.php script to check and update the schema. This will insert missing tables, update existing tables, and move data around as needed. In most cases, this is successful and nothing further needs to be done.

The [MediaWiki](/wiki/MediaWiki) release notes tend to be pretty abysmal for incremental upgrades so it is never clear when you have to run the script. Although it is almost certainly not required for a minor update, I decided to run the script anyway.

Run the update script:

    cd install_dir/maintenance
    sudo -u "${APACHE_USER}" php ./update.php

Or in the case of the root-owned install:

    sudo -s
    cd install_dir/maintenance
    php ./update.php

Output:

    MediaWiki 1.6.10 Updater

    Going to run database updates for salsawiki
    Depending on the size of your database this may take a while!
    Abort with control-c in the next five seconds...0
    ...hitcounter table already exists.
    ...querycache table already exists.
    ...objectcache table already exists.
    ...categorylinks table already exists.
    ...logging table already exists.
    ...validate table already exists.
    ...user_newtalk table already exists.
    ...transcache table already exists.
    ...trackbacks table already exists.
    ...externallinks table already exists.
    ...job table already exists.
    ...have ipb_id field in ipblocks table.
    ...have ipb_expiry field in ipblocks table.
    ...have rc_type field in recentchanges table.
    ...have rc_ip field in recentchanges table.
    ...have rc_id field in recentchanges table.
    ...have rc_patrolled field in recentchanges table.
    ...have user_real_name field in user table.
    ...have user_token field in user table.
    ...have user_email_token field in user table.
    ...have user_registration field in user table.
    ...have log_params field in logging table.
    ...have ar_rev_id field in archive table.
    ...have ar_text_id field in archive table.
    ...have page_len field in page table.
    ...have rev_deleted field in revision table.
    ...have img_width field in image table.
    ...have img_metadata field in image table.
    ...have img_media_type field in image table.
    ...have val_ip field in validate table.
    ...have ss_total_pages field in site_stats table.
    ...have iw_trans field in interwiki table.
    ...have ipb_range_start field in ipblocks table.
    ...have ss_images field in site_stats table.
    ...already have interwiki table
    ...indexes seem up to 20031107 standards
    Already have pagelinks; skipping old links table updates.
    ...image primary key already set.
    The watchlist table is already set up for email notification.
    ...watchlist talk page rows already present
    ...user table does not contain old email authentication field.
    Logging table has correct title encoding.
    ...page table already exists.
    revision timestamp indexes already up to 2005-03-13
    ...rev_text_id already in place.
    ...page_namespace is already a full int (int(11)).
    ...ar_namespace is already a full int (int(11)).
    ...rc_namespace is already a full int (int(11)).
    ...wl_namespace is already a full int (int(11)).
    ...qc_namespace is already a full int (int(11)).
    ...log_namespace is already a full int (int(11)).
    ...already have pagelinks table.
    ...templatelinks table already exists
    No img_type field in image table; Good.
    Already have unique user_name index.
    ...user_groups table already exists.
    ...user_groups is in current format.
    ...wl_notificationtimestamp is already nullable.
    ...timestamp key on logging already exists.
    Setting page_random to a random value on rows where it equals 0...changed 0 rows
    Initialising "MediaWiki" namespace...
    Clearing message cache...Done.
    Done.

# See also

-   1.6.10 release notes: <http://svn.wikimedia.org/svnroot/mediawiki/tags/REL1_6_10/phase3/RELEASE-NOTES>
-   Official [MediaWiki](/wiki/MediaWiki) notes on [Subversion](/wiki/Subversion)-based upgrades: <http://www.mediawiki.org/wiki/Download_from_SVN>
