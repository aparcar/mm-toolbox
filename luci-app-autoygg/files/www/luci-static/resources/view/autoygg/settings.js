'use strict';
'require view';
'require form';

return view.extend({
	render: function() {
		var m, s, o;

		m = new form.Map('autoygg', 'Autoygg-client');

		s = m.section(form.TypedSection, 'autoygg', _('General settings'));
		s.anonymous = true;

		s.option(form.Value, "gatewayhost", _("the yggdrasil ipv6 address of your autoygg gateway"));
		s.option(form.Value, "gatewayport", _("the port of your autoygg gateway"));
		s.option(form.Value, "yggdrasilinterface", _("Yggdrasil's network interface name"));

		s.option(form.Value, "clientname", _("Your name (optional)"));
		s.option(form.Value, "clientemail", _("Your e-mail address (optional)"));
		s.option(form.Value, "clientphone", _("Your phone number (optional)"));

		return m.render();
	}
});
