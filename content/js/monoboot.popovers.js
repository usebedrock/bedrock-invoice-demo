/* ==========================================================================
  Monoboot popovers
  @1.0.0
   ========================================================================== */

alert('hi');
/* Dynamic popover placement
   ========================================================================== */

function getPopoverPlacement(popover, thisElement) {
  // Get body width
  var bodyWidth = window.innerWidth;
  var leftPosition = $(thisElement).offset().left;
  var topPosition = $(thisElement).offset().top;

  if ( bodyWidth < 500) return 'bottom';

  if (topPosition < 30) {
    return 'bottom';
  }

  if (bodyWidth - leftPosition > 400) {
    return 'right';
  } else {
    return 'left';
  }
}

/* Override bootstrap popover to include callback and class name
   ========================================================================== */

var showPopover = $.fn.popover.Constructor.prototype.show;

$.fn.popover.Constructor.prototype.show = function() {

  // Add a class to the popover based on the data reference
  var $tip = this.tip();
  $tip.addClass(this.$element.attr("data-popover-ref")+'-popover');

  // Initializ callback function
  showPopover.call(this);
  if (this.options.showCallback) {
    this.options.showCallback.call(this);
  }

}

/* Initialize popovers
   ========================================================================== */

var isPopoverVisible = false;

var hideAllPopovers = function() {
   $('.popover').each(function() {
        $('[data-popover-ref]').popover('hide');
    });  
};

$('[data-popover-ref]').click(function(e) {
  e.preventDefault();
});

$('[data-popover-ref]').popover({
    trigger : 'manual',
    placement : getPopoverPlacement,
    container: 'body',
    html : true,
    content: function() {
      var foundHtml = $('[data-popover-html="' + $(this).attr('data-popover-ref') + '"]').html();
      return foundHtml;
    },
    template: '<div class="popover"><div class="arrow"></div><div class="popover-content"></div></div>',
    showCallback: function() {
      initSelect2();
      initPopoverEvents();
    }
}).on('click', function(e) {

    // If any other popovers are visible, hide them
    if(isPopoverVisible) {
        hideAllPopovers();
    }

    // Show our popover
    $(this).popover('show');

    // Handle clicking on the popover itself
    $('.popover').off('click').on('click', function(e) {
        e.stopPropagation(); // prevent event for bubbling up => will not get caught with document.onclick
    });

    // Close button inside popover
    $('[data-dismiss="popover"]').click(function() {
      hideAllPopovers();
    });

    isPopoverVisible = true;
    e.stopPropagation();

})

$(document).on('click', function(e) {
    hideAllPopovers();
    isPopoverVisible = false;
});

function initPopoverEvents() {

  // Re-bind dropdowns @todo doesn't work
  $(".popover").on('click', '.dropdown-toggle', function(e) {
    console.log('Rebinding dropdowns');
    $(this).dropdown();
  });

  $(".btn[data-role='toggle-popover-split']").click(function(e) {
    console.log('Adding row');
    $(this).parents('.popover')
      .find('.hide').removeClass('hide');

    initSelect2DynamicAdd();
  
    $(this).parents('.popover')
      .find('.table').find('tr:first input').val('04:00');
  });
}
