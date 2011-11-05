---
tags: leopard rubygems updates
cache_breaker: 1
---

Notes made while upgrading to [RubyGems 1.0.1](/wiki/RubyGems_1.0.1) (skipping over [RubyGems 1.0.0](/wiki/RubyGems_1.0.0) on [Mac OS X](/wiki/Mac_OS_X) [Leopard](/wiki/Leopard) 10.5.1.

# Installation

    $ sudo gem update --system
    Password:
    Updating RubyGems...
    Attempting remote update of rubygems-update
    Successfully installed rubygems-update-1.0.1
    1 gem installed
    Updating version of RubyGems to 1.0.1
    Installing RubyGems 1.0.1
    install -c -m 0644 rbconfig/datadir.rb /Library/Ruby/Site/1.8/rbconfig/datadir.rb
    install -c -m 0644 rubygems/builder.rb /Library/Ruby/Site/1.8/rubygems/builder.rb
    install -c -m 0644 rubygems/command.rb /Library/Ruby/Site/1.8/rubygems/command.rb
    install -c -m 0644 rubygems/command_manager.rb /Library/Ruby/Site/1.8/rubygems/command_manager.rb
    install -c -m 0644 rubygems/commands/build_command.rb /Library/Ruby/Site/1.8/rubygems/commands/build_command.rb
    install -c -m 0644 rubygems/commands/cert_command.rb /Library/Ruby/Site/1.8/rubygems/commands/cert_command.rb
    install -c -m 0644 rubygems/commands/check_command.rb /Library/Ruby/Site/1.8/rubygems/commands/check_command.rb
    install -c -m 0644 rubygems/commands/cleanup_command.rb /Library/Ruby/Site/1.8/rubygems/commands/cleanup_command.rb
    install -c -m 0644 rubygems/commands/contents_command.rb /Library/Ruby/Site/1.8/rubygems/commands/contents_command.rb
    install -c -m 0644 rubygems/commands/dependency_command.rb /Library/Ruby/Site/1.8/rubygems/commands/dependency_command.rb
    install -c -m 0644 rubygems/commands/environment_command.rb /Library/Ruby/Site/1.8/rubygems/commands/environment_command.rb
    install -c -m 0644 rubygems/commands/fetch_command.rb /Library/Ruby/Site/1.8/rubygems/commands/fetch_command.rb
    install -c -m 0644 rubygems/commands/generate_index_command.rb /Library/Ruby/Site/1.8/rubygems/commands/generate_index_command.rb
    install -c -m 0644 rubygems/commands/help_command.rb /Library/Ruby/Site/1.8/rubygems/commands/help_command.rb
    install -c -m 0644 rubygems/commands/install_command.rb /Library/Ruby/Site/1.8/rubygems/commands/install_command.rb
    install -c -m 0644 rubygems/commands/list_command.rb /Library/Ruby/Site/1.8/rubygems/commands/list_command.rb
    install -c -m 0644 rubygems/commands/lock_command.rb /Library/Ruby/Site/1.8/rubygems/commands/lock_command.rb
    install -c -m 0644 rubygems/commands/mirror_command.rb /Library/Ruby/Site/1.8/rubygems/commands/mirror_command.rb
    install -c -m 0644 rubygems/commands/outdated_command.rb /Library/Ruby/Site/1.8/rubygems/commands/outdated_command.rb
    install -c -m 0644 rubygems/commands/pristine_command.rb /Library/Ruby/Site/1.8/rubygems/commands/pristine_command.rb
    install -c -m 0644 rubygems/commands/query_command.rb /Library/Ruby/Site/1.8/rubygems/commands/query_command.rb
    install -c -m 0644 rubygems/commands/rdoc_command.rb /Library/Ruby/Site/1.8/rubygems/commands/rdoc_command.rb
    install -c -m 0644 rubygems/commands/search_command.rb /Library/Ruby/Site/1.8/rubygems/commands/search_command.rb
    install -c -m 0644 rubygems/commands/server_command.rb /Library/Ruby/Site/1.8/rubygems/commands/server_command.rb
    install -c -m 0644 rubygems/commands/sources_command.rb /Library/Ruby/Site/1.8/rubygems/commands/sources_command.rb
    install -c -m 0644 rubygems/commands/specification_command.rb /Library/Ruby/Site/1.8/rubygems/commands/specification_command.rb
    install -c -m 0644 rubygems/commands/uninstall_command.rb /Library/Ruby/Site/1.8/rubygems/commands/uninstall_command.rb
    install -c -m 0644 rubygems/commands/unpack_command.rb /Library/Ruby/Site/1.8/rubygems/commands/unpack_command.rb
    install -c -m 0644 rubygems/commands/update_command.rb /Library/Ruby/Site/1.8/rubygems/commands/update_command.rb
    install -c -m 0644 rubygems/commands/which_command.rb /Library/Ruby/Site/1.8/rubygems/commands/which_command.rb
    install -c -m 0644 rubygems/config_file.rb /Library/Ruby/Site/1.8/rubygems/config_file.rb
    install -c -m 0644 rubygems/custom_require.rb /Library/Ruby/Site/1.8/rubygems/custom_require.rb
    install -c -m 0644 rubygems/defaults.rb /Library/Ruby/Site/1.8/rubygems/defaults.rb
    install -c -m 0644 rubygems/dependency.rb /Library/Ruby/Site/1.8/rubygems/dependency.rb
    install -c -m 0644 rubygems/dependency_installer.rb /Library/Ruby/Site/1.8/rubygems/dependency_installer.rb
    install -c -m 0644 rubygems/dependency_list.rb /Library/Ruby/Site/1.8/rubygems/dependency_list.rb
    install -c -m 0644 rubygems/digest/digest_adapter.rb /Library/Ruby/Site/1.8/rubygems/digest/digest_adapter.rb
    install -c -m 0644 rubygems/digest/md5.rb /Library/Ruby/Site/1.8/rubygems/digest/md5.rb
    install -c -m 0644 rubygems/digest/sha1.rb /Library/Ruby/Site/1.8/rubygems/digest/sha1.rb
    install -c -m 0644 rubygems/digest/sha2.rb /Library/Ruby/Site/1.8/rubygems/digest/sha2.rb
    install -c -m 0644 rubygems/doc_manager.rb /Library/Ruby/Site/1.8/rubygems/doc_manager.rb
    install -c -m 0644 rubygems/exceptions.rb /Library/Ruby/Site/1.8/rubygems/exceptions.rb
    install -c -m 0644 rubygems/ext/builder.rb /Library/Ruby/Site/1.8/rubygems/ext/builder.rb
    install -c -m 0644 rubygems/ext/configure_builder.rb /Library/Ruby/Site/1.8/rubygems/ext/configure_builder.rb
    install -c -m 0644 rubygems/ext/ext_conf_builder.rb /Library/Ruby/Site/1.8/rubygems/ext/ext_conf_builder.rb
    install -c -m 0644 rubygems/ext/rake_builder.rb /Library/Ruby/Site/1.8/rubygems/ext/rake_builder.rb
    install -c -m 0644 rubygems/ext.rb /Library/Ruby/Site/1.8/rubygems/ext.rb
    install -c -m 0644 rubygems/format.rb /Library/Ruby/Site/1.8/rubygems/format.rb
    install -c -m 0644 rubygems/gem_open_uri.rb /Library/Ruby/Site/1.8/rubygems/gem_open_uri.rb
    install -c -m 0644 rubygems/gem_openssl.rb /Library/Ruby/Site/1.8/rubygems/gem_openssl.rb
    install -c -m 0644 rubygems/gem_path_searcher.rb /Library/Ruby/Site/1.8/rubygems/gem_path_searcher.rb
    install -c -m 0644 rubygems/gem_runner.rb /Library/Ruby/Site/1.8/rubygems/gem_runner.rb
    install -c -m 0644 rubygems/indexer/abstract_index_builder.rb /Library/Ruby/Site/1.8/rubygems/indexer/abstract_index_builder.rb
    install -c -m 0644 rubygems/indexer/marshal_index_builder.rb /Library/Ruby/Site/1.8/rubygems/indexer/marshal_index_builder.rb
    install -c -m 0644 rubygems/indexer/master_index_builder.rb /Library/Ruby/Site/1.8/rubygems/indexer/master_index_builder.rb
    install -c -m 0644 rubygems/indexer/quick_index_builder.rb /Library/Ruby/Site/1.8/rubygems/indexer/quick_index_builder.rb
    install -c -m 0644 rubygems/indexer.rb /Library/Ruby/Site/1.8/rubygems/indexer.rb
    install -c -m 0644 rubygems/install_update_options.rb /Library/Ruby/Site/1.8/rubygems/install_update_options.rb
    install -c -m 0644 rubygems/installer.rb /Library/Ruby/Site/1.8/rubygems/installer.rb
    install -c -m 0644 rubygems/local_remote_options.rb /Library/Ruby/Site/1.8/rubygems/local_remote_options.rb
    install -c -m 0644 rubygems/old_format.rb /Library/Ruby/Site/1.8/rubygems/old_format.rb
    install -c -m 0644 rubygems/open-uri.rb /Library/Ruby/Site/1.8/rubygems/open-uri.rb
    install -c -m 0644 rubygems/package.rb /Library/Ruby/Site/1.8/rubygems/package.rb
    install -c -m 0644 rubygems/platform.rb /Library/Ruby/Site/1.8/rubygems/platform.rb
    install -c -m 0644 rubygems/remote_fetcher.rb /Library/Ruby/Site/1.8/rubygems/remote_fetcher.rb
    install -c -m 0644 rubygems/require_paths_builder.rb /Library/Ruby/Site/1.8/rubygems/require_paths_builder.rb
    install -c -m 0644 rubygems/requirement.rb /Library/Ruby/Site/1.8/rubygems/requirement.rb
    install -c -m 0644 rubygems/rubygems_version.rb /Library/Ruby/Site/1.8/rubygems/rubygems_version.rb
    install -c -m 0644 rubygems/security.rb /Library/Ruby/Site/1.8/rubygems/security.rb
    install -c -m 0644 rubygems/server.rb /Library/Ruby/Site/1.8/rubygems/server.rb
    install -c -m 0644 rubygems/source_index.rb /Library/Ruby/Site/1.8/rubygems/source_index.rb
    install -c -m 0644 rubygems/source_info_cache.rb /Library/Ruby/Site/1.8/rubygems/source_info_cache.rb
    install -c -m 0644 rubygems/source_info_cache_entry.rb /Library/Ruby/Site/1.8/rubygems/source_info_cache_entry.rb
    install -c -m 0644 rubygems/specification.rb /Library/Ruby/Site/1.8/rubygems/specification.rb
    install -c -m 0644 rubygems/timer.rb /Library/Ruby/Site/1.8/rubygems/timer.rb
    install -c -m 0644 rubygems/uninstaller.rb /Library/Ruby/Site/1.8/rubygems/uninstaller.rb
    install -c -m 0644 rubygems/user_interaction.rb /Library/Ruby/Site/1.8/rubygems/user_interaction.rb
    install -c -m 0644 rubygems/validator.rb /Library/Ruby/Site/1.8/rubygems/validator.rb
    install -c -m 0644 rubygems/version.rb /Library/Ruby/Site/1.8/rubygems/version.rb
    install -c -m 0644 rubygems/version_option.rb /Library/Ruby/Site/1.8/rubygems/version_option.rb
    install -c -m 0644 rubygems.rb /Library/Ruby/Site/1.8/rubygems.rb
    install -c -m 0644 ubygems.rb /Library/Ruby/Site/1.8/ubygems.rb
    cp gem /tmp/gem
    install -c -m 0755 /tmp/gem /System/Library/Frameworks/Ruby.framework/Versions/1.8/usr/bin/gem
    rm /tmp/gem
    cp update_rubygems /tmp/update_rubygems
    install -c -m 0755 /tmp/update_rubygems /System/Library/Frameworks/Ruby.framework/Versions/1.8/usr/bin/update_rubygems
    rm /tmp/update_rubygems
    rm /Users/wincent/.gem/source_cache
    rm /Library/Ruby/Gems/1.8/source_cache
    Removing old RubyGems RDoc and ri...
    rm -rf /Library/Ruby/Gems/1.8/doc/rubygems-0.9.5
    Installing rubygems-1.0.1 ri into /Library/Ruby/Gems/1.8/doc/rubygems-1.0.1/ri...
    Installing rubygems-1.0.1 rdoc into /Library/Ruby/Gems/1.8/doc/rubygems-1.0.1/rdoc...
    As of RubyGems 0.8.0, library stubs are no longer needed.
    Searching $LOAD_PATH for stubs to optionally delete (may take a while)...
    ...done.
    No library stubs found.
    RubyGems system software updated

# Updating the [FastRI](/wiki/FastRI) index

    $ fastri-server -b
    Building index.
    Indexed:
    * 7710 methods
    * 1364 classes/modules
    Needed 1.558438 seconds