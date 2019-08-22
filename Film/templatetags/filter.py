from django import template

register = template.Library()


@register.filter
def seatnum(row, col):
    res = col + 10 * (row - 1)
    return res

@register.filter
def locknum(x, arr):
    for i in arr:
        if i == x:
            return True
        return False
