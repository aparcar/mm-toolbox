module("luci.controller.mm-cli", package.seeall)

function index()

    if not nixio.fs.access("/etc/config/system") then
       return
    end

    local page

    -- install this page into the hierarchy under admin -> services
    --
    page = entry({"admin", "network", "mm-cli"}, cbi("mm-cli"), _("Internet Gateway"))

    -- the i18n file's base name
    --
    page.i18n = "mm-cli"
    page.dependent = true
end
