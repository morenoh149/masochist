---
title: Ruby refinements
tags: ruby refinements
---

Playing with [Ruby](/wiki/Ruby) [refinements](http://www.ruby-doc.org/core-2.1.3/doc/syntax/refinements_rdoc.html) for the first time. Disappointed that you can't just do something like:

```ruby
module Project
  using SomeRefinement

  # ...
end
```

And have the refinements defined in `SomeRefinement` be available throughout an entire library (literally all the modules and classes, inside and outside of instance and class methods, even if they're spread over different files).

In particular, I'm having trouble right now getting this pattern to work:

```ruby
module Project
  module BagOfMethods
    using SomeRefinement # need this for the refinement to be visible in these methods

    def some_method
      # ... method which relies on the refinement being active
    end
  end

  module SomeRefinement
    refine String do
      include BagOfMethods

      def something
        # whatever
      end
    end
  end
end
```

Obviously, this won't work because of the circular reference (`BagOfMethods` depends on `SomeRefinement` and vice versa), but what I need is something that can replace this nasty old code:

```ruby
# this, and similar things for Regexp, Symbol, Proc etc
class String
  include BagOfMethods

  def other_stuff
    # end
  end
end

module Project
  class SomethingElse
    include BagOfMethods
  end
end
```